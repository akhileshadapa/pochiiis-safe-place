const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const overlay = $('#overlay');
const panelContent = $('#panelContent');

const panels = {
  lampPanel: `<div class="panel-head"><span class="eyebrow">a little reminder</span><h2>You're allowed to rest.</h2><p>You don't have to solve everything tonight. One small step is still a step. 🌷</p></div>`,
  hugPanel: `<div class="big-hug"><div class="hug">🫂</div><h2>Come here, Pochiiii.</h2><p>Consider this your emergency internet hug. Stay as long as you need.</p><p>♡ ♡ ♡</p></div>`,
  phonePanel: `<div class="panel-head"><span class="eyebrow">the important conversations</span><h2>Our kind of nonsense</h2></div><div class="chat">
    <div class="bubble">“Are you free?”</div><div class="bubble me">“For what?”</div><div class="bubble">“Nothing important.”</div><div class="bubble me">“Then yes.”</div><div class="bubble">“I have a story.”</div><div class="bubble me">“Oh no 😭 tell me.”</div>
  </div><p class="tip">Replace these with your actual inside jokes in script.js if you want.</p>`,
  notebookPanel: `<div class="panel-head"><span class="eyebrow">things I hope you remember</span><h2>Little Things</h2></div><div class="pages">
    <div class="page">You don't need to be okay every second.</div>
    <div class="page">Your bad days don't erase all your good ones.</div>
    <div class="page">You are allowed to take things slowly.</div>
    <div class="page">Somewhere out there, someone is very glad you exist. ♡</div>
    <div class="page">And yes, unfortunately, you're stuck with me. :)</div>
  </div>`,
  galleryPanel: `<div class="panel-head"><span class="eyebrow">little pieces of us</span><h2>Memory Wall</h2><p>Clicking a photo brought you here. Scroll slowly. ♡</p></div>
  <div class="gallery">
    <figure><img src="assets/photos/photo-01.jpg"><figcaption>write your memory here...</figcaption></figure>
    <figure><img src="assets/photos/photo-02.jpg"><figcaption>write your memory here...</figcaption></figure>
    <figure><img src="assets/photos/photo-03.jpg"><figcaption>write your memory here...</figcaption></figure>
    <figure><img src="assets/photos/photo-04.jpg"><figcaption>write your memory here...</figcaption></figure>
    <figure><img src="assets/photos/photo-05.jpg"><figcaption>write your memory here...</figcaption></figure>
    <figure><img src="assets/photos/photo-06.jpg"><figcaption>write your memory here...</figcaption></figure>
  </div>`,
  windowPanel: `<div class="night"><div class="moon">☾</div><h2>Stay here for a minute.</h2><p>Put your phone down for a second. Take a slow breath. Look at the sky. You don't have to figure out tomorrow tonight.</p><p>Whatever today was, it is allowed to end here.</p><p>🌙 &nbsp; ✦ &nbsp; ♡ &nbsp; ✦ &nbsp; 🌙</p></div>`
};

function openPanel(key){
  if(key === 'lettersPanel'){
    panelContent.innerHTML = $('#lettersTemplate').innerHTML;
    $$('.envelope').forEach(btn => btn.addEventListener('click', () => openAudio(btn.dataset.audio, btn.querySelector('b').textContent)));
  } else {
    panelContent.innerHTML = panels[key] || '';
  }
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function openAudio(name,title){
  const safe = name;
  panelContent.innerHTML = `<div class="audio-card"><div class="big">🎧</div><span class="eyebrow">your voice note</span><h3>${title}</h3><p>Take your time. Put your headphones on if you have them.</p><audio controls preload="metadata" src="assets/audio/open-when-${safe}.mp3"></audio><p>♡ from your best friend</p><button class="primary" id="backLetters">← back to letters</button></div>`;
  $('#backLetters').addEventListener('click',()=>openPanel('lettersPanel'));
}
function closePanel(){overlay.classList.remove('open');document.body.style.overflow=''}
$$('[data-panel]').forEach(el=>el.addEventListener('click',()=>openPanel(el.dataset.panel)));
$$('[data-close]').forEach(el=>el.addEventListener('click',closePanel));
overlay.addEventListener('click',e=>{if(e.target===overlay)closePanel()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});
$('[data-enter]').addEventListener('click',()=>{$('#welcome').classList.remove('active');$('#room').classList.add('active');window.scrollTo({top:0,behavior:'smooth'})});
$('[data-back]').addEventListener('click',()=>{$('#room').classList.remove('active');$('#welcome').classList.add('active');window.scrollTo({top:0,behavior:'smooth'})});
$$('[tabindex="0"]').forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')el.click()}));
