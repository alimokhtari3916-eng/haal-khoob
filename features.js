(() => {
const $f = (s) => document.querySelector(s);
const copy = {
 fa: {
  moods:[["great","😄","شاد و پرانرژی","انرژی‌ات را در یک کار دوست‌داشتنی خرج کن."],["okay","🙂","معمولی","یک کار کوچک انتخاب کن که امروز را کمی بهتر کند."],["anxious","😟","نگران یا مضطرب","به اطرافت نگاه کن و پنج چیزی را که می‌بینی نام ببر؛ آرام و بدون اجبار نفس بکش."],["sad","💙","غمگین","لازم نیست همین حالا حالت را عوض کنی؛ با یک آدم امن حرف بزن یا چند خط بنویس."],["tired","😴","خسته","کمی آب، استراحت کوتاه و کم‌کردن یک انتظار غیرضروری را امتحان کن."]],
  moodTitle:"امروز دلت چه حال و هوایی دارد؟",moodIntro:"هر احساسی که داری قابل شنیدن است؛ این انتخاب فقط برای پیشنهاد محتوای مناسب‌تر است، نه تشخیص روان‌شناختی.",
  themeTitle:"حال‌وهوای ظاهری برنامه",themes:[["calm","🌿","آرام"],["joy","☀️","شاد و روشن"],["night","🌙","تاریک و شب"],["reflective","🌧️","خلوت و تأملی"],["warm","🕯️","گرم و دنج"]],
  themesHelp:"پوسته فقط رنگ‌ها و فضای بصری را عوض می‌کند؛ قرار نیست احساس خاصی را به تو تحمیل کند.",
  moodSaved:"حال امروزت ثبت شد. فقط روی همین دستگاه می‌ماند.",moodEmpty:"می‌توانی بدون قضاوت حال امروزت را انتخاب کنی.",moodHistory:"ثبت امروز: ",
  journeyIntro:"هر روز یک قدم کوچک؛ انجام هر روز را خودت علامت بزن. برنامه جایگزین درمان یا مشاوره نیست.",
  days7:"مسیر ۷ روزه",days21:"مسیر ۲۱ روزه",progress:"پیشرفت: ",day:"روز ",done:"انجام شد ✓",todo:"علامت‌زدن انجام",
  journey7:[["مکث و شناخت حال","سه بار در روز مکث کن و نام احساست را بنویس."],["مهربانی با خود","یک جمله حمایتگر برای خودت بنویس."],["توجه به بدن","چند دقیقه کشش ملایم یا قدم‌زدن."],["یک فکر، نه یک حقیقت","یک فکر ناراحت‌کننده را بنویس و شواهدش را بررسی کن."],["ارتباط امن","به یک دوست یا فرد قابل اعتماد پیام بده."],["قدردانی واقع‌بینانه","سه چیز کوچک و واقعی را که ارزشمندند یادداشت کن."],["مرور و انتخاب","یک قدم کوچک برای هفته بعد انتخاب کن."]],
  journey21:[["شناخت ارزش‌ها","سه چیزی را که در زندگی برایت مهم است بنویس."],["نام‌گذاری احساس","احساس اصلی امروزت را نام‌گذاری کن."],["مهربانی با خود","با خودت مثل یک دوست حرف بزن."],["تنفس و مکث","یک تمرین آرام و بدون فشار انجام بده."],["بررسی فکر","فرق واقعیت و برداشت را بنویس."],["خواب و استراحت","یک تغییر کوچک برای خواب بهتر انتخاب کن."],["ارتباط","با یک فرد امن ارتباط بگیر."],["مرزبندی","یک «نه» محترمانه را تمرین کن."],["حرکت ملایم","ده دقیقه حرکت متناسب با توانت."],["تمرکز","یک کار را ده دقیقه بدون حواس‌پرتی انجام بده."],["قدردانی","سه نکته کوچک را ثبت کن."],["خلاقیت","یک کار خلاقانه کوچک انجام بده."],["طبیعت","چند دقیقه به صداها و رنگ‌های محیط توجه کن."],["کمک خواستن","نیازی را که داری روشن و محترمانه بیان کن."],["خودشناسی","یک الگوی تکراری رفتارت را مشاهده کن."],["انعطاف‌پذیری","برای یک برنامه جایگزین ساده بساز."],["لذت سالم","کاری کوچک فقط برای لذت انجام بده."],["مرور دستاورد","یک قدمی را که برداشته‌ای به رسمیت بشناس."],["آرام‌سازی","یک استراحت کوتاه و آگاهانه داشته باش."],["هدف کوچک","یک هدف واقع‌بینانه برای هفته بعد تعیین کن."],["ادامه مسیر","چیزی را که آموختی در سه خط مرور کن."]],
  sounds:[["drizzle","🌦️","باران ریز","ریز و آرام"],["window","🪟","باران پشت پنجره","نرم و نزدیک"],["roof","🏠","باران روی سقف","قطره‌های تندتر"],["storm","⛈️","باران و رعد","طوفانی و بم"],["ocean","🌊","موج دریا","موج‌های آهسته"],["forest","🌲","جنگل و پرنده","نسیم و جیک‌جیک"],["fire","🔥","شومینه","خش‌خش آتش"],["music","🎼","موسیقی مینیمال","هارمونی ساخته‌شده در مرورگر"],["night","🌌","شب آرام","صدای زمینه ملایم"]],
  soundIdle:"هنوز صدایی پخش نمی‌شود.",soundPlaying:"در حال پخش: ",soundError:"مرورگر اجازه پخش صدا نداد؛ یک بار دیگر دکمه را لمس کن.",stop:"توقف صدا",
  books:[["Self-Compassion","Kristin Neff","این کتاب سه مهارت اصلی شفقت به خود را توضیح می‌دهد: مهربانی با خود به‌جای سرزنش، دیدن رنج به‌عنوان بخشی از تجربه مشترک انسان‌ها، و توجه‌آگاهی بدون اغراق یا انکار احساسات.","https://www.hachette.co.uk/titles/kristin-neff-2/self-compassion/9781444738179/"],["The Happiness Trap","Russ Harris","نویسنده با تکیه بر درمان مبتنی بر پذیرش و تعهد توضیح می‌دهد چگونه به‌جای جنگیدن دائمی با فکرها و احساسات دشوار، آن‌ها را مشاهده کنیم و رفتارمان را با ارزش‌های مهم زندگی هماهنگ سازیم.","https://www.shambhala.com/products/happiness-trap-second-edition-how-to-stop-struggling-and-start-living"],["Man’s Search for Meaning","Viktor E. Frankl","روایت و دیدگاه فرانکل درباره جست‌وجوی معنا در شرایط دشوار؛ برای تأمل درباره ارزش‌ها و معنایی که فرد در زندگی خود می‌سازد. این خلاصه، معرفی کلی است نه جایگزین متن کتاب.","https://www.penguinrandomhouse.com/books/206272/mans-search-for-meaning-by-viktor-e-frankl/"],["The Gifts of Imperfection","Brené Brown","دعوتی به فاصله‌گرفتن از کمال‌گرایی فرساینده و تمرین اصالت، آسیب‌پذیری و تعلق؛ مناسب برای گفت‌وگو درباره شرم و خودپذیری.","https://brenebrown.com/book/the-gifts-of-imperfection/"]],
  podcasts:[["#399 · Helping humans and wildlife coexist","APA · Speaking of Psychology · ۲۸ اکتبر ۲۰۲۶","گفت‌وگو درباره همزیستی انسان و حیات‌وحش شهری و اینکه شناخت رفتار حیوانات چگونه می‌تواند به رابطه مسئولانه‌تر ما با محیط کمک کند.","https://www.apa.org/news/podcasts/speaking-of-psychology/"],["#398 · Why we complain and how to do it better","APA · Speaking of Psychology · ۲۱ اکتبر ۲۰۲۶","درباره تفاوت تخلیه هیجانی و شکایت سازنده، و اینکه چطور شکایت را به ارتباط روشن‌تر و حل مسئله تبدیل کنیم.","https://www.apa.org/research/action/speaking-of-psychology/"],["#392 · Why does music move us?","APA · Speaking of Psychology · ۹ سپتامبر ۲۰۲۶","پژوهش درباره موسیقی، سیستم پاداش مغز، خاطره و هیجان؛ مناسب برای بخش موسیقی و سلامت روان.","https://www.apa.org/speakingofpsychology"]]
 },
 en: {
  moods:[["great","😄","Happy & energized","Use your energy for one activity you genuinely enjoy."],["okay","🙂","Doing okay","Choose one small thing that could make today a little better."],["anxious","😟","Worried or anxious","Name five things you can see around you; breathe gently without forcing it."],["sad","💙","Sad","You do not need to change the feeling immediately; reach out to someone safe or write a few lines."],["tired","😴","Tired","Try some water, a short rest, and lowering one unnecessary expectation."]],
  moodTitle:"How are you feeling today?",moodIntro:"Every feeling deserves attention. This check-in only helps suggest relevant content; it is not a psychological assessment.",
  themeTitle:"Choose your visual mood",themes:[["calm","🌿","Calm"],["joy","☀️","Bright & joyful"],["night","🌙","Dark night"],["reflective","🌧️","Quiet & reflective"],["warm","🕯️","Warm & cozy"]],
  themesHelp:"Themes change the colors and visual atmosphere only; they do not tell you how you should feel.",
  moodSaved:"Your check-in is saved on this device only.",moodEmpty:"Choose how you feel today, without judgment.",moodHistory:"Today's check-in: ",
  journeyIntro:"One small step each day. Mark each day yourself. This is not a substitute for care or therapy.",
  days7:"7-day path",days21:"21-day path",progress:"Progress: ",day:"Day ",done:"Completed ✓",todo:"Mark complete",
  journey7:[["Pause and notice","Pause three times today and name what you feel."],["Self-kindness","Write one supportive sentence to yourself."],["Notice your body","Try gentle stretching or a short walk."],["A thought is not a fact","Write a difficult thought and examine the evidence."],["Safe connection","Message a friend or trusted person."],["Realistic gratitude","Note three small things you value."],["Review and choose","Choose one small step for next week."]],
  journey21:[["Know your values","Write three things that matter to you."],["Name an emotion","Name your main feeling today."],["Be kind to yourself","Speak to yourself as you would to a friend."],["Pause and breathe","Try a gentle breathing practice."],["Check a thought","Write the difference between fact and interpretation."],["Sleep and rest","Choose one small sleep-supporting change."],["Connect","Reach out to someone safe."],["Boundaries","Practice a respectful no."],["Gentle movement","Move for ten minutes within your comfort."],["Focus","Do one task for ten minutes without distraction."],["Gratitude","Record three small things."],["Creativity","Try a small creative activity."],["Nature","Notice the sounds and colors around you."],["Ask for support","Express one need clearly and kindly."],["Self-awareness","Notice one repeated behavior pattern."],["Flexibility","Create a simple alternative plan."],["Healthy pleasure","Do one small thing just for enjoyment."],["Notice progress","Acknowledge one step you have taken."],["Relax","Take a short, mindful break."],["Small goal","Set one realistic goal for next week."],["Continue","Review what you learned in three lines."]],
  sounds:[["drizzle","🌦️","Light drizzle","Soft fine rain"],["window","🪟","Rain on a window","Gentle and close"],["roof","🏠","Rain on a roof","Faster droplets"],["storm","⛈️","Rain and thunder","Stormy low rumble"],["ocean","🌊","Ocean waves","Slow rolling waves"],["forest","🌲","Forest birds","Breeze and bird-like chirps"],["fire","🔥","Fireplace","Soft crackling"],["music","🎼","Minimal ambient music","Synthesized in your browser"],["night","🌌","Quiet night","Gentle background tone"]],
  soundIdle:"No sound is playing.",soundPlaying:"Playing: ",soundError:"Your browser blocked audio. Tap the scene again.",stop:"Stop sound",
  books:[["Self-Compassion","Kristin Neff","Introduces three core self-compassion skills: treating yourself kindly rather than harshly, recognizing shared human experience, and noticing feelings mindfully without exaggeration or denial.","https://www.hachette.co.uk/titles/kristin-neff-2/self-compassion/9781444738179/"],["The Happiness Trap","Russ Harris","Using Acceptance and Commitment Therapy ideas, the book explores how to notice difficult thoughts and feelings instead of endlessly fighting them, then act in line with personal values.","https://www.shambhala.com/products/happiness-trap-second-edition-how-to-stop-struggling-and-start-living"],["Man’s Search for Meaning","Viktor E. Frankl","Frankl’s account and ideas about the search for meaning during hardship; a starting point for reflecting on values and the meaning people create in life.","https://www.penguinrandomhouse.com/books/"],["The Gifts of Imperfection","Brené Brown","An invitation to loosen exhausting perfectionism and practice authenticity, vulnerability and belonging; useful for reflecting on shame and self-acceptance.","https://brenebrown.com/book/the-gifts-of-imperfection/"]],
  podcasts:[["#399 · Helping humans and wildlife coexist","APA · Speaking of Psychology · 28 Oct 2026","A conversation about how people and urban wildlife can coexist, and how understanding animal behavior can support a more thoughtful relationship with our environment.","https://www.apa.org/news/podcasts/speaking-of-psychology/"],["#398 · Why we complain and how to do it better","APA · Speaking of Psychology · 21 Oct 2026","Explores the difference between venting and constructive complaining, and how clearer communication can help solve problems.","https://www.apa.org/research/action/speaking-of-psychology/"],["#392 · Why does music move us?","APA · Speaking of Psychology · 9 Sep 2026","Research on music, the brain’s reward system, memory and emotion; a useful companion to the app’s sound and music section.","https://www.apa.org/speakingofpsychology"]]
 }
};
const plans={7:null,21:null};
let selectedDays=7, activeAudio=null, audioCtx=null, masterGain=null, soundNodes=[], birdTimer=null, themeOpen=false;
const readJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let moodLog=readJSON("haal-moods",{});
let doneLog=readJSON("haal-journey",{});
function renderMoods(){
 const c=copy[lang]||copy.fa;
 $("#moodTitle").textContent=c.moodTitle;$("#moodIntro").textContent=c.moodIntro;
 $("#moodChoices").innerHTML=c.moods.map(m=>'<button type="button" class="mood-choice" data-mood="'+m[0]+'"><span>'+m[1]+'</span><b>'+m[2]+'</b><small>'+(lang==="fa"?"انتخاب کن":"Choose")+'</small></button>').join("");
 const now=new Date(),today=now.getFullYear()+"-"+String(now.getMonth()+1).padStart(2,"0")+"-"+String(now.getDate()).padStart(2,"0"), chosen=moodLog[today];
 document.querySelectorAll(".mood-choice").forEach(b=>{if(b.dataset.mood===chosen)b.classList.add("selected")});
 const chosenMood=c.moods.find(m=>m[0]===chosen);
 $("#moodFeedback").textContent=chosenMood?c.moodSaved+" "+chosenMood[3]:c.moodEmpty;
 $("#moodStreak").textContent=chosenMood?c.moodHistory+chosenMood[2]:(lang==="fa"?"شروع یک گفت‌وگوی مهربانانه":"A kind check-in");
}
function setMood(id){
 const now=new Date(),today=now.getFullYear()+"-"+String(now.getMonth()+1).padStart(2,"0")+"-"+String(now.getDate()).padStart(2,"0");moodLog[today]=id;localStorage.setItem("haal-moods",JSON.stringify(moodLog));
 renderMoods();document.querySelectorAll(".mood-choice").forEach(b=>b.classList.toggle("selected",b.dataset.mood===id));
 const m=copy[lang].moods.find(x=>x[0]===id);$("#moodFeedback").textContent=copy[lang].moodSaved+" "+m[3];
}
function renderJourney(){
 const c=copy[lang],arr=selectedDays===7?c.journey7:c.journey21,key=String(selectedDays),done=doneLog[key]||[];
 document.querySelectorAll("[data-days]").forEach(b=>b.classList.toggle("active",Number(b.dataset.days)===selectedDays));
 const pct=Math.round(done.length/arr.length*100);$("#journeyProgress span").style.width=pct+"%";$("#journeyPercent").textContent=c.progress+pct+"% · "+done.length+"/"+arr.length;
 $("#journeyDays").innerHTML=arr.map((d,i)=>'<button class="journey-day '+(done.includes(i)?"done":"")+'" data-day="'+i+'"><b>'+c.day+(i+1)+' · '+d[0]+'</b><small>'+d[1]+'</small><small>'+(done.includes(i)?c.done:c.todo)+'</small></button>').join("");
}
function toggleJourneyDay(i){const key=String(selectedDays),arr=doneLog[key]||[];doneLog[key]=arr.includes(i)?arr.filter(x=>x!==i):[...arr,i];localStorage.setItem("haal-journey",JSON.stringify(doneLog));renderJourney()}
function renderSounds(){
 $("#soundScenes").innerHTML=copy[lang].sounds.map(s=>'<button type="button" class="sound-scene '+(activeAudio===s[0]?"active":"")+'" data-sound="'+s[0]+'"><span>'+s[1]+'</span><b>'+s[2]+'</b><small>'+s[3]+'</small></button>').join("");
 $("#soundStatus").textContent=activeAudio?copy[lang].soundPlaying+copy[lang].sounds.find(s=>s[0]===activeAudio)[2]:copy[lang].soundIdle;
 $("#stopSound").textContent=copy[lang].stop;
}
function stopSound(){
 soundNodes.forEach(n=>{try{if(n.stop)n.stop();if(n.disconnect)n.disconnect()}catch{}});soundNodes=[];
 if(birdTimer){clearInterval(birdTimer);birdTimer=null}
 if(masterGain){try{masterGain.disconnect()}catch{}}
 activeAudio=null;renderSounds();
}
function node(n){soundNodes.push(n);return n}
function makeNoise(filterType,frequency,q=0.7,volume=0.5){
 const length=audioCtx.sampleRate*4,buffer=audioCtx.createBuffer(1,length,audioCtx.sampleRate),data=buffer.getChannelData(0);
 for(let i=0;i<length;i++)data[i]=Math.random()*2-1;
 const src=node(audioCtx.createBufferSource());src.buffer=buffer;src.loop=true;
 const filter=node(audioCtx.createBiquadFilter());filter.type=filterType;filter.frequency.value=frequency;filter.Q.value=q;
 const gain=node(audioCtx.createGain());gain.gain.value=volume;src.connect(filter);filter.connect(gain);gain.connect(masterGain);src.start();return {src,filter,gain};
}
function tone(freq,vol,type="sine"){
 const o=node(audioCtx.createOscillator()),g=node(audioCtx.createGain());o.type=type;o.frequency.value=freq;g.gain.value=vol;o.connect(g);g.connect(masterGain);o.start();return {o,g};
}
function chirp(){
 if(!audioCtx||!masterGain)return;
 const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type="sine";o.frequency.setValueAtTime(2100+Math.random()*1200,audioCtx.currentTime);o.frequency.exponentialRampToValueAtTime(950,audioCtx.currentTime+0.16);g.gain.setValueAtTime(0.0001,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(0.018,audioCtx.currentTime+0.025);g.gain.exponentialRampToValueAtTime(0.0001,audioCtx.currentTime+0.18);o.connect(g);g.connect(masterGain);o.start();o.stop(audioCtx.currentTime+0.2);
}
async function playSound(id){
 stopSound();activeAudio=id;
 try{
  const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw new Error("AudioContext unavailable");
  audioCtx=audioCtx||new AC();if(audioCtx.state==="suspended")await audioCtx.resume();
  masterGain=node(audioCtx.createGain());masterGain.gain.value=Number($("#soundVolume").value)/100*0.22;masterGain.connect(audioCtx.destination);
  if(["drizzle","window","roof","storm"].includes(id)){
   const spec={drizzle:["lowpass",1700,0.55],window:["bandpass",1150,0.9],roof:["highpass",1250,0.6],storm:["lowpass",2200,0.7]}[id];
   makeNoise(spec[0],spec[1],spec[2],id==="drizzle"?0.58:0.72);
   if(id==="window"||id==="roof")makeNoise("highpass",4200,0.3,0.13);
   if(id==="storm"){makeNoise("lowpass",100,0.6,0.5);const rumble=tone(48,0.045,"triangle");const lfo=node(audioCtx.createOscillator());lfo.frequency.value=0.07;const depth=node(audioCtx.createGain());depth.gain.value=0.025;lfo.connect(depth);depth.connect(rumble.g.gain);lfo.start()}
  } else if(id==="ocean"){
   makeNoise("lowpass",420,0.6,0.75);const swell=tone(0.12,0.35);swell.o.frequency.value=0.12;const lfo=node(audioCtx.createOscillator()),depth=node(audioCtx.createGain());lfo.frequency.value=0.09;depth.gain.value=0.11;lfo.connect(depth);depth.connect(masterGain.gain);lfo.start();
  } else if(id==="forest"){
   makeNoise("lowpass",900,0.6,0.2);makeNoise("highpass",3200,0.7,0.11);chirp();birdTimer=setInterval(chirp,1800+Math.random()*1700);
  } else if(id==="fire"){
   makeNoise("bandpass",600,1.2,0.18);makeNoise("lowpass",190,0.5,0.12);
   birdTimer=setInterval(()=>{if(!audioCtx)return;const t=audioCtx.currentTime;const click=audioCtx.createBufferSource(),buf=audioCtx.createBuffer(1,900,audioCtx.sampleRate),d=buf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;click.buffer=buf;const g=audioCtx.createGain();g.gain.setValueAtTime(0.014,t);g.gain.exponentialRampToValueAtTime(0.0001,t+0.035);click.connect(g);g.connect(masterGain);click.start();click.stop(t+0.04)},650+Math.random()*500);
  } else if(id==="music"){
   tone(174.61,0.20);tone(220,0.13);tone(261.63,0.09);tone(329.63,0.035);
   const lfo=node(audioCtx.createOscillator()),depth=node(audioCtx.createGain());lfo.frequency.value=0.045;depth.gain.value=0.018;lfo.connect(depth);depth.connect(masterGain.gain);lfo.start();
  } else if(id==="night"){makeNoise("lowpass",260,0.5,0.06);tone(130.81,0.07);tone(196,0.025)}
  $("#soundStatus").textContent=copy[lang].soundPlaying+copy[lang].sounds.find(s=>s[0]===id)[2];renderSounds();
 }catch(e){activeAudio=null;$("#soundStatus").textContent=copy[lang].soundError;renderSounds()}
}
function renderBooksAndPods(){
 const c=copy[lang];
 $("#bookGrid").innerHTML=c.books.map(b=>'<article class="book-card"><span class="eyebrow">'+(lang==="fa"?"خلاصه مستقل":"Independent summary")+'</span><h3>'+b[0]+'</h3><div class="byline">'+b[1]+'</div><p>'+b[2]+'</p><a href="'+b[3]+'" target="_blank" rel="noopener">'+(lang==="fa"?"صفحه ناشر و اطلاعات کتاب ↗":"Publisher and book details ↗")+'</a></article>').join("");
 $("#podcastGrid").innerHTML=c.podcasts.map(p=>'<article class="book-card"><span class="eyebrow">'+(lang==="fa"?"پیشنهاد شنیداری":"Podcast pick")+'</span><h3>'+p[0]+'</h3><div class="byline">'+p[1]+'</div><p>'+p[2]+'</p><a href="'+p[3]+'" target="_blank" rel="noopener">'+(lang==="fa"?"شنیدن و دیدن متن رسمی ↗":"Listen / official transcript ↗")+'</a></article>').join("");
}
function themeControl(){
 const box=document.createElement("div");box.className="theme-pop";box.id="themePop";box.innerHTML='<h3 id="themePopTitle"></h3><div id="themeOptions" class="theme-options"></div><p class="feature-note" id="themeHelp"></p>';document.body.appendChild(box);
 function render(){const c=copy[lang];$("#themePopTitle").textContent=c.themeTitle;$("#themeHelp").textContent=c.themesHelp;const current=localStorage.getItem("haal-theme")||"calm";$("#themeOptions").innerHTML=c.themes.map(x=>'<button class="theme-option '+(x[0]===current?"active":"")+'" data-theme-choice="'+x[0]+'">'+x[1]+" "+x[2]+'</button>').join("")}
 function apply(v){document.body.dataset.theme=v;localStorage.setItem("haal-theme",v);render()}
 const saved=localStorage.getItem("haal-theme")||"calm";apply(saved);
 $("#themeToggle").addEventListener("click",()=>{themeOpen=!themeOpen;box.classList.toggle("open",themeOpen)});
 box.addEventListener("click",e=>{const b=e.target.closest("[data-theme-choice]");if(b)apply(b.dataset.themeChoice)});
 document.addEventListener("click",e=>{if(!box.contains(e.target)&&e.target!==$("#themeToggle")){themeOpen=false;box.classList.remove("open")}});
 $("#langToggle").addEventListener("click",()=>setTimeout(render,0));
 render();
}
function addMessage(text,isUser=false){const div=document.createElement("div");div.className="assistant-bubble"+(isUser?" user":"");div.textContent=text;$("#assistantMessages").appendChild(div);$("#assistantMessages").scrollTop=$("#assistantMessages").scrollHeight}
function localGuide(input){
 const s=input.toLowerCase(),fa=lang==="fa";
 if(/خودکش|آسیب به خود|نمی.?خواهم زنده|خودم را بکشم|suicid|self.?harm|kill myself/.test(s))return fa?"متأسفم که ممکن است چنین فشار سنگینی را تحمل کنی. اگر همین حالا احتمال آسیب‌زدن به خودت وجود دارد، تنها نمان؛ با یک فرد امن تماس بگیر و از خدمات اورژانسی محل زندگی‌ات کمک فوری بگیر. من ابزار بحران یا درمانگر نیستم، اما می‌توانم کمک کنم قدم امن بعدی را پیدا کنی.":"I’m sorry this feels so heavy. If you may hurt yourself now, please don’t stay alone: contact someone you trust and seek urgent help from local emergency services. I’m not a crisis service or therapist, but I can help you think through the next safe step.";
 if(/اضطراب|نگران|استرس|دلشوره|panic|anx|stress|worr/.test(s))return fa?"اول لازم نیست همه مسئله را حل کنی. کف پاهایت را روی زمین حس کن و پنج چیز را که می‌بینی نام ببر. بعد بنویس: «الان چه چیزی در کنترل من است؟» اگر اضطراب شدید، تازه یا مداوم است، گفت‌وگو با متخصص می‌تواند کمک‌کننده باشد.":"You don’t need to solve everything right now. Feel your feet on the floor and name five things you can see. Then ask: “What is within my control right now?” If anxiety is severe, new, or persistent, consider speaking with a qualified professional.";
 if(/غمگین|تنها|گریه|ناامید|sad|lonely|hopeless|cry/.test(s))return fa?"لازم نیست برای بهترشدن عجله کنی یا احساست را پنهان کنی. شاید کمک کند به یک نفر امن بگویی «امروز روز سختی دارم؛ می‌توانی کمی کنارم باشی؟» یک کار کوچک و قابل‌انجام برای مراقبت از خودت انتخاب کن.":"You don’t have to rush yourself into feeling better or hide what you feel. It may help to tell someone safe, “I’m having a hard day; could you keep me company for a while?” Choose one small, manageable act of care.";
 if(/رابطه|دوست|خانواده|مرز|relationship|friend|family|boundar/.test(s))return fa?"برای روشن‌ترشدن موضوع، سه چیز را جدا کن: چه اتفاقی افتاد؟ چه احساسی داشتی؟ چه نیازی داری؟ بعد یک درخواست مشخص و محترمانه بنویس. اگر رابطه ناامن یا همراه خشونت است، اولویت با امنیت و کمک تخصصی است.":"To clarify the situation, separate three things: What happened? What did you feel? What do you need? Then draft one clear, respectful request. If the relationship is unsafe or abusive, prioritize safety and professional support.";
 if(/هدف|انگیزه|عادت|کار|تمرکز|هدف|habit|motivat|focus|goal|procrast/.test(s))return fa?"کار را آن‌قدر کوچک کن که شروعش آسان باشد: فقط پنج دقیقه. زمان و مکان شروع را مشخص کن و بعد از انجام همان قدم کوچک، پیشرفتت را ثبت کن.":"Make the task small enough to begin: just five minutes. Choose when and where to start, then record the small step once it’s done.";
 return fa?"می‌توانیم با یک سؤال کوچک شروع کنیم: دوست داری الان بیشتر شنیده شوی، مسئله را روشن‌تر ببینی، یا یک قدم عملی پیدا کنی؟ پاسخ‌های این نسخه محلی و آموزشی‌اند و جایگزین گفت‌وگو با متخصص نیستند.":"We can start with one small question: would you rather feel heard, understand the situation more clearly, or find one practical next step? This local guide is educational and not a substitute for professional care.";
}
function initAssistant(){
 $("#assistantForm").addEventListener("submit",e=>{e.preventDefault();const v=$("#assistantInput").value.trim();if(!v)return;addMessage(v,true);$("#assistantInput").value="";setTimeout(()=>addMessage(localGuide(v)),120)});
}
function init(){
 renderMoods();renderJourney();renderSounds();renderBooksAndPods();themeControl();initAssistant();
 $("#moodChoices").addEventListener("click",e=>{const b=e.target.closest("[data-mood]");if(b)setMood(b.dataset.mood)});
 $("#journeyDays").addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b)toggleJourneyDay(Number(b.dataset.day))});
 document.querySelectorAll("[data-days]").forEach(b=>b.addEventListener("click",()=>{selectedDays=Number(b.dataset.days);renderJourney()}));
 $("#soundScenes").addEventListener("click",e=>{const b=e.target.closest("[data-sound]");if(b)playSound(b.dataset.sound)});
 $("#stopSound").addEventListener("click",stopSound);
 $("#soundVolume").addEventListener("input",e=>{if(masterGain)masterGain.gain.value=Number(e.target.value)/100*0.22});
 $("#langToggle").addEventListener("click",()=>setTimeout(()=>{renderMoods();renderJourney();renderSounds();renderBooksAndPods()},0));
 document.addEventListener("visibilitychange",()=>{if(document.hidden&&audioCtx&&audioCtx.state==="running")audioCtx.suspend()});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();