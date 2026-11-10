const cors = (origin) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Vary": "Origin"
});

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowedOrigin = env.ALLOWED_ORIGIN || "";
    if (request.method === "OPTIONS") {
      if (allowedOrigin && origin !== allowedOrigin) return new Response(null, { status: 403 });
      return new Response(null, { headers: cors(allowedOrigin || "*") });
    }
    if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
    if (allowedOrigin && origin !== allowedOrigin) return Response.json({ error: "Origin not allowed" }, { status: 403, headers: cors(allowedOrigin) });
    if (!env.OPENAI_API_KEY || !env.OPENAI_MODEL) {
      return Response.json({ error: "AI service is not configured" }, { status: 503, headers: cors(allowedOrigin || "*") });
    }
    let body;
    try { body = await request.json(); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400, headers: cors(allowedOrigin || "*") }); }
    const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";
    const language = body.language === "en" ? "English" : "Persian";
    if (!message) return Response.json({ error: "Message is required" }, { status: 400, headers: cors(allowedOrigin || "*") });

    const instructions = [
      "You are Haal Khoob, a supportive general-wellbeing assistant.",
      "Reply in " + language + ". Be warm, brief, practical, respectful, and non-judgmental.",
      "You are not a therapist, doctor, crisis service, or diagnostic tool. Never diagnose, prescribe medication, or claim treatment.",
      "Offer one or two safe, small, evidence-informed coping ideas; distinguish established evidence from general suggestions; do not invent quotes, citations, or research.",
      "For self-harm, suicide, abuse, or immediate danger, respond compassionately and urge immediate contact with local emergency services and a trusted person; do not rely on this chat for crisis support.",
      "Do not request identifying details. Do not claim this conversation is stored by this app. Do not use tools or browse.",
      "If the user asks for specific facts or citations you cannot verify, say so."
    ].join(" ");

    try {
      const upstream = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: { "Authorization": "Bearer " + env.OPENAI_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: env.OPENAI_MODEL,
          store: false,
          max_output_tokens: 420,
          input: [
            { role: "developer", content: instructions },
            { role: "user", content: message }
          ]
        })
      });
      const data = await upstream.json();
      if (!upstream.ok) return Response.json({ error: "AI provider request failed" }, { status: 502, headers: cors(allowedOrigin || "*") });
      const reply = (data.output || []).flatMap(item => item.content || []).filter(part => part.type === "output_text").map(part => part.text).join("\n").trim();
      if (!reply) return Response.json({ error: "No text response returned" }, { status: 502, headers: cors(allowedOrigin || "*") });
      return Response.json({ reply }, { headers: { ...cors(allowedOrigin || "*"), "Cache-Control": "no-store" } });
    } catch {
      return Response.json({ error: "AI service temporarily unavailable" }, { status: 502, headers: cors(allowedOrigin || "*") });
    }
  }
};