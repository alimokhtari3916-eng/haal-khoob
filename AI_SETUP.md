# اتصال امن دستیار هوش مصنوعی حال خوب

وب‌سایت GitHub Pages فقط فایل‌های ایستا میزبانی می‌کند. برای پاسخ واقعی مدل زبانی، یک endpoint سمت سرور لازم است؛ کلید API را هرگز در `app.js`، `features.js`، `ai-config.js` یا مخزن عمومی قرار ندهید.

## فایل‌های آماده
- `worker/ai-worker.js`: کد Cloudflare Worker برای فراخوانی OpenAI Responses API با secret سمت سرور.
- `ai-config.js`: فقط URL عمومی Worker را نگه می‌دارد؛ کلید محرمانه نیست.

## راه‌اندازی یک‌باره
1. در Cloudflare حساب بسازید و یک Worker جدید ایجاد کنید.
2. محتوای `worker/ai-worker.js` را در ویرایشگر Worker قرار دهید و Deploy کنید.
3. در Worker → Settings → Variables and Secrets این موارد را تنظیم کنید:
   - Secret: `OPENAI_API_KEY` = کلید API پروژه شما (فقط در Cloudflare Secret)
   - Variable: `OPENAI_MODEL` = شناسه مدلی که در حساب API شما فعال است
   - Variable: `ALLOWED_ORIGIN` = `https://alimokhtari3916-eng.github.io`
4. در Cloudflare برای مسیر Worker محدودیت درخواست/Rate limit بگذارید؛ CORS به‌تنهایی جلوی فراخوانی مستقیم از ابزارهای دیگر را نمی‌گیرد.
5. URL عمومی Worker را در `ai-config.js` در مقدار `window.HAAL_KHOOB_AI_ENDPOINT` قرار دهید و Commit کنید.

## حریم خصوصی و هزینه
- Worker پیام‌ها را در برنامه ذخیره نمی‌کند و درخواست Responses را با `store: false` می‌فرستد؛ بااین‌حال متن پیام برای تولید پاسخ به ارائه‌دهنده مدل ارسال می‌شود.
- استفاده از API ممکن است هزینه جداگانه داشته باشد؛ قبل از فعال‌سازی، تعرفه و سقف هزینه حساب API را بررسی کنید.
- پاسخ‌گو برای پشتیبانی عمومی و آموزشی طراحی شده است، نه تشخیص، درمان، نسخه‌نویسی یا رسیدگی به بحران.
- تا وقتی endpoint تنظیم نشده، رابط برنامه از راهنمای محلی و ازپیش‌تعریف‌شده استفاده می‌کند و نباید آن را مدل هوش مصنوعی آنلاین تلقی کرد.

راهنمای رسمی کلیدها: https://developers.openai.com/api/docs/guides/api-keys
مرجع Responses API: https://developers.openai.com/api/reference/resources/responses/methods/create
