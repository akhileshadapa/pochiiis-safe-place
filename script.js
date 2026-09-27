/**
 * ===================================================================
 * 🌙 POCHIIII'S SAFE PLACE - HIGH-PERFORMANCE CLIENT SCRIPT
 * 60/120/144 FPS Butter-Smooth, Zero Garbage Collection Thrash, Zero Lag
 * ===================================================================
 */

const SAFE_PLACE_CONFIG = {
  "photos": [
    {
      "src": "assets/photos/photo-01.jpg",
      "caption": " Gurthu undha ni bday roju di",
      "date": "Late Night Talks",
      "alt": "Memory 1"
    },
    {
      "src": "assets/photos/photo-02.jpg",
      "caption": "You are too cutee nanaaa",
      "date": "Under the Stars",
      "alt": "Memory 2"
    },
    {
      "src": "assets/photos/photo-03.jpg",
      "caption": "Navutha undali pochiiiii ",
      "date": "Quiet Afternoons",
      "alt": "Memory 3"
    },
    {
      "src": "assets/photos/photo-04.jpg",
      "caption": " You are always there for me",
      "date": "Sunset by the Sea",
      "alt": "Memory 4"
    },
    {
      "src": "assets/photos/photo-05.jpg",
      "caption": "After getting beaten by her mom..",
      "date": "Rainy Days",
      "alt": "Memory 5"
    },
    {
      "src": "assets/photos/photo-06.jpg",
      "caption": "Sigguuu blushhuuuu",
      "date": "Little Wishes",
      "alt": "Memory 6"
    }
  ],
  "envelopes": [
    {
      "id": "crying",
      "title": "edpu ostundhaa nanaa?",
      "icon": "\ud83d\ude2d",
      "color": "#e0a8c8",
      "audioFile": "assets/audio/open-when-crying.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "nen lenapudu evadhu telsu ga nanaaa Em ina sarey",
    },
    {
      "id": "hug",
      "title": "hug kavala?",
      "icon": "\ud83e\udec2",
      "color": "#f8b4c4",
      "audioFile": "assets/audio/open-when-hug.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "Uh wanna be me as your blanket?? I am with uh nanaa",
    },
    {
      "id": "sleep",
      "title": "Can't sleep?",
      "icon": "\ud83c\udf19",
      "color": "#b8b5e6",
      "audioFile": "assets/audio/open-when-sleep.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "ni pakkaney una telsu ga",
    },
    {
      "id": "overthinking",
      "title": "em thoughts ochina, overthinking?",
      "icon": "\ud83e\udde0",
      "color": "#aed9e0",
      "audioFile": "assets/audio/open-when-overthinking.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "endukey pichiiii danaa",
    },
    {
      "id": "laugh",
      "title": "navvu ostaley?",
      "icon": "\ud83d\ude02",
      "color": "#ffd3b6",
      "audioFile": "assets/audio/open-when-laugh.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "nen untey navvu thapa inkem ravadhu ga😂",
    },
    {
      "id": "alone",
      "title": "feeling alone?",
      "icon": "\ud83e\udd7a",
      "color": "#d4b2d8",
      "audioFile": "assets/audio/open-when-alone.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "oka danivi anipistundha nanaa ?? Nen una ga niku , nii akhiiiiii",
    },
    {
      "id": "motivation",
      "title": "motivation kavala?",
      "icon": "\ud83c\udf1f",
      "color": "#ffeaa7",
      "audioFile": "assets/audio/open-when-motivation.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "nik motivation endukey motions avuthay poo, mantram vestunaaa",
    },
    {
      "id": "miss-us",
      "title": "miss me?",
      "icon": "\u2764\ufe0f",
      "color": "#ffb6b9",
      "audioFile": "assets/audio/open-when-miss-us.mp3",
      "subtext": "open thiss pochiiiii",
      "personalMessage": "niloo nannu chusko nanaa Uh won't miss me"
    }
  ],
  "notebook": [
    "You don't need to be okay every single second.",
    "Your bad days don't erase your good ones.",
    "You are allowed to take things slowly.",
    "Somewhere out there, someone is very glad you exist. \u2661",
    "And yes, unfortunately, you're stuck with me. :)"
  ],
  "chatMessages": [
    {
      "sender": "them",
      "text": "Oseyy pochiiii",
      "delay": 600
    },
    {
      "sender": "me",
      "text": "Enti bheyy",
      "delay": 1300
    },
    {
      "sender": "them",
      "text": "okati chepaliiii",
      "delay": 2000
    },
    {
      "sender": "me",
      "text": "Enti nanaa? Chepuuu",
      "delay": 2700
    },
    {
      "sender": "them",
      "text": "okatiiiii...",
      "delay": 3400
    },
    {
      "sender": "me",
      "text": "Ni abbaaa dobheeyyyyy raa..",
      "delay": 4100
    }
  ],
  "secretLetter": {
    "stanzas": [
      "If life feels heavy right now,\nyou don't have to carry everything today.",
      "Take it one day at a time.",
      "And whenever you need a little corner of the world where you're understood...",
      "you know where to find me. \ud83e\udef6"
    ],
    "signoff": "\u2014 Your idiot best friend \u2764\ufe0f"
  }
};

/* ===================================================================
   1. PROCEDURAL SOUND ENGINE (Zero Network / Audio File Lag)
   =================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.ambientRunning = false;
    this.ambientNodes = [];
    this.lullabyInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playPop() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch (e) {}
  }

  playChime() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.07;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.0);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 1.0);
      });
    } catch (e) {}
  }

  playEnvelopeRustle() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playMessagePing() {
    if (!this.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(784, this.ctx.currentTime);
      osc.frequency.setValueAtTime(1046.5, this.ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }

  startDemoLullaby() {
    this.init();
    if (!this.ctx || this.lullabyInterval) return;
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    let step = 0;
    this.lullabyInterval = setInterval(() => {
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const freq = notes[step % notes.length];
        step = (step + Math.floor(Math.random() * 3) + 1);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.5);
      } catch (e) {}
    }, 650);
  }

  stopDemoLullaby() {
    if (this.lullabyInterval) {
      clearInterval(this.lullabyInterval);
      this.lullabyInterval = null;
    }
  }

  toggleAmbientNight(enable) {
    this.init();
    if (!this.ctx) return;
    if (enable) {
      if (this.ambientRunning) return;
      this.ambientRunning = true;
      try {
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.012;
        }
        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, this.ctx.currentTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        whiteNoise.start();

        this.ambientNodes = [whiteNoise, filter, gain];
      } catch (e) {}
    } else {
      this.ambientRunning = false;
      this.ambientNodes.forEach(n => {
        try { if (n.stop) n.stop(); n.disconnect(); } catch (e) {}
      });
      this.ambientNodes = [];
    }
  }
}

const sounds = new SoundEngine();

/* ===================================================================
   2. HIGH-PERFORMANCE 60FPS STARFIELD CANVAS (Zero GC Allocations)
   =================================================================== */
class StarCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d', { alpha: true }) : null;
    this.stars = [];
    this.dust = [];
    this.width = 0;
    this.height = 0;
    this.animId = null;

    if (this.canvas) {
      this.resize();
      window.addEventListener('resize', () => this.resize(), { passive: true });
      this.initParticles();
      this.render = this.render.bind(this);
      this.render(0);
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.stars = [];
    // Optimal fixed count for dreamy aesthetic without GPU/CPU choke
    const starCount = 55;
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() < 0.2 ? 2.5 : 1.5,
        baseAlpha: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.8 + 0.4
      });
    }

    this.dust = [];
    const dustCount = 14;
    for (let i = 0; i < dustCount; i++) {
      this.dust.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 1.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.25 - 0.08
      });
    }
  }

  render(timestamp) {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    const time = timestamp * 0.001;

    // 1. Draw twinkling stars using constant fillStyle + globalAlpha (0 string allocations)
    this.ctx.fillStyle = '#ffffff';
    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      const twinkle = Math.sin(time * s.speed + s.phase) * 0.35 + 0.65;
      this.ctx.globalAlpha = s.baseAlpha * twinkle;
      this.ctx.fillRect(s.x, s.y, s.size, s.size);
    }

    // 2. Draw floating warm dust motes
    this.ctx.fillStyle = '#f8a5c2';
    this.ctx.globalAlpha = 0.35;
    for (let i = 0; i < this.dust.length; i++) {
      const d = this.dust[i];
      d.x += d.vx;
      d.y += d.vy;
      if (d.y < 0) d.y = this.height;
      if (d.x < 0) d.x = this.width;
      if (d.x > this.width) d.x = 0;

      this.ctx.fillRect(d.x, d.y, d.size, d.size);
    }

    this.ctx.globalAlpha = 1.0;
    this.animId = requestAnimationFrame(this.render);
  }
}

/* ===================================================================
   3. HIGH-PERFORMANCE AUDIO WAVEFORM & CONTROLLER
   =================================================================== */
class VoiceNotePlayer {
  constructor() {
    this.currentEnvelope = null;
    this.isPlaying = false;
    this.isSynthetic = false;
    this.simulatedTime = 0;
    this.simulatedDuration = 90;
    this.animFrame = null;
    this.waveCanvas = null;
    this.waveCtx = null;
    this.audioElement = null;
    this.speedIndex = 0;
    this.speeds = [1.0, 1.25, 1.5, 0.8];
    this.cachedGradient = null;
  }

  setup(envelope) {
    this.currentEnvelope = envelope;
    this.isPlaying = false;
    this.isSynthetic = false;
    this.simulatedTime = 0;
    sounds.stopDemoLullaby();

    this.audioElement = document.getElementById('actualAudio');
    this.waveCanvas = document.getElementById('waveformCanvas');
    if (this.waveCanvas) {
      this.waveCtx = this.waveCanvas.getContext('2d');
      this.cachedGradient = this.waveCtx.createLinearGradient(0, 0, 0, this.waveCanvas.height);
      this.cachedGradient.addColorStop(0, '#f8a5c2');
      this.cachedGradient.addColorStop(1, '#d6b4f7');
    }

    const titleEl = document.getElementById('audioTitle');
    const iconEl = document.getElementById('audioIcon');
    const msgEl = document.getElementById('audioPersonalMessage');
    const feedbackEl = document.getElementById('audioStatusFeedback');

    if (titleEl) titleEl.textContent = envelope.title;
    if (iconEl) iconEl.textContent = envelope.icon;
    if (msgEl) msgEl.textContent = `"${envelope.personalMessage}"`;

    if (this.audioElement) {
      this.audioElement.src = envelope.audioFile;
      this.audioElement.playbackRate = this.speeds[this.speedIndex];

      this.audioElement.onloadedmetadata = () => {
        this.updateTimeDisplay(this.audioElement.currentTime, this.audioElement.duration);
        if (feedbackEl) feedbackEl.innerHTML = '<small style="color: #2ed573;">✓ Personal recording ready to play.</small>';
      };

      this.audioElement.ontimeupdate = () => {
        if (!this.isSynthetic) {
          this.updateTimeDisplay(this.audioElement.currentTime, this.audioElement.duration);
        }
      };

      this.audioElement.onended = () => {
        this.pause();
      };

      this.audioElement.onerror = () => {
        this.isSynthetic = true;
        this.updateTimeDisplay(0, this.simulatedDuration);
        if (feedbackEl) {
          feedbackEl.innerHTML = '<small style="color: #f7d794;">🎧 Playing soothing demo lullaby. (Drop your recording into <code>' + envelope.audioFile + '</code> whenever ready!)</small>';
        }
      };
    }

    this.bindControls();
    this.drawWaveform(0);
  }

  bindControls() {
    const playBtn = document.getElementById('playPauseAudioBtn');
    const restartBtn = document.getElementById('restartAudioBtn');
    const speedBtn = document.getElementById('audioSpeedBtn');
    const progressTrack = document.getElementById('progressTrack');

    if (playBtn) playBtn.onclick = () => this.togglePlay();
    if (restartBtn) restartBtn.onclick = () => { sounds.playPop(); this.seekTo(0); };
    if (speedBtn) {
      speedBtn.onclick = () => {
        sounds.playPop();
        this.speedIndex = (this.speedIndex + 1) % this.speeds.length;
        const newSpeed = this.speeds[this.speedIndex];
        speedBtn.textContent = newSpeed.toFixed(1) + 'x';
        if (this.audioElement) this.audioElement.playbackRate = newSpeed;
      };
    }

    if (progressTrack) {
      progressTrack.onclick = (e) => {
        const rect = progressTrack.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const dur = (this.audioElement && !isNaN(this.audioElement.duration) && this.audioElement.duration > 0)
          ? this.audioElement.duration
          : this.simulatedDuration;
        this.seekTo(ratio * dur);
      };
    }
  }

  togglePlay() {
    sounds.playPop();
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    const playIcon = document.getElementById('playIcon');
    if (playIcon) playIcon.textContent = '❚❚';

    if (this.audioElement && !this.isSynthetic) {
      const playPromise = this.audioElement.play();
      if (playPromise) {
        playPromise.catch(() => {
          this.isSynthetic = true;
          sounds.startDemoLullaby();
        });
      }
    } else {
      sounds.startDemoLullaby();
    }

    this.runVisualizerLoop();
  }

  pause() {
    this.isPlaying = false;
    const playIcon = document.getElementById('playIcon');
    if (playIcon) playIcon.textContent = '▶';

    if (this.audioElement) this.audioElement.pause();
    sounds.stopDemoLullaby();

    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }
    this.drawWaveform(0);
  }

  seekTo(seconds) {
    if (this.audioElement && !this.isSynthetic) {
      this.audioElement.currentTime = seconds;
      this.updateTimeDisplay(seconds, this.audioElement.duration);
    } else {
      this.simulatedTime = seconds;
      this.updateTimeDisplay(seconds, this.simulatedDuration);
    }
  }

  updateTimeDisplay(current, duration) {
    const curLabel = document.getElementById('currentTimeLabel');
    const durLabel = document.getElementById('durationTimeLabel');
    const fill = document.getElementById('progressFill');
    const scrubber = document.getElementById('progressScrubber');

    if (!duration || isNaN(duration)) duration = this.simulatedDuration;
    if (isNaN(current)) current = 0;

    const ratio = Math.min(1, current / duration);
    if (curLabel) curLabel.textContent = this.formatTime(current);
    if (durLabel) durLabel.textContent = this.formatTime(duration);
    if (fill) fill.style.width = (ratio * 100) + '%';
    if (scrubber) scrubber.style.left = (ratio * 100) + '%';
  }

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  runVisualizerLoop() {
    if (!this.isPlaying) return;

    if (this.isSynthetic) {
      this.simulatedTime += 0.05 * this.speeds[this.speedIndex];
      if (this.simulatedTime >= this.simulatedDuration) {
        this.simulatedTime = 0;
        this.pause();
        return;
      }
      this.updateTimeDisplay(this.simulatedTime, this.simulatedDuration);
    }

    const time = Date.now() * 0.003;
    this.drawWaveform(time);
    this.animFrame = requestAnimationFrame(() => this.runVisualizerLoop());
  }

  drawWaveform(t) {
    if (!this.waveCanvas || !this.waveCtx) return;
    const w = this.waveCanvas.width;
    const h = this.waveCanvas.height;
    const ctx = this.waveCtx;

    ctx.clearRect(0, 0, w, h);

    const barCount = 36;
    const barWidth = w / barCount - 2;

    ctx.fillStyle = this.cachedGradient;
    for (let i = 0; i < barCount; i++) {
      let amp = 0.14;
      if (this.isPlaying) {
        amp = Math.sin(t * 3 + i * 0.35) * 0.35 + Math.cos(t * 2 + i * 0.25) * 0.25 + 0.45;
      }
      const barHeight = Math.max(6, amp * (h - 18));
      const x = i * (barWidth + 2);
      const y = (h - barHeight) * 0.5;

      ctx.fillRect(x, y, barWidth, barHeight);
    }
  }

  destroy() {
    this.pause();
    sounds.stopDemoLullaby();
  }
}

const voicePlayer = new VoiceNotePlayer();

/* ===================================================================
   4. MASTER APP CONTROLLER & BUTTER-SMOOTH RAF PARALLAX
   =================================================================== */
class SafePlaceApp {
  constructor() {
    this.welcomeScreen = document.getElementById('welcomeScreen');
    this.roomScreen = document.getElementById('roomScreen');
    this.interactiveRoom = document.getElementById('interactiveRoom');
    this.modalOverlay = document.getElementById('modalOverlay');
    this.modalDynamicBody = document.getElementById('modalDynamicBody');
    this.lampStickyNote = document.getElementById('lampStickyNote');
    this.heartContainer = document.getElementById('heartContainer');
    this.lampOn = false;

    this.initEventListeners();
    this.initSmoothParallax();
  }

  initEventListeners() {
    // 1. Enter Room Button (Both ID & data-enter attribute)
    const enterButtons = document.querySelectorAll('#enterRoomBtn, [data-enter]');
    enterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        sounds.playChime();
        this.transitionToRoom();
      });
    });

    // 2. Exit Room Button (Both ID & data-back attribute)
    const exitButtons = document.querySelectorAll('#exitRoomBtn, [data-back]');
    exitButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        sounds.playPop();
        this.transitionToWelcome();
      });
    });

    // 3. Audio & Ambiance Toggle Buttons
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        sounds.soundEnabled = !sounds.soundEnabled;
        const icon = soundBtn.querySelector('.icon');
        const label = soundBtn.querySelector('.label');
        if (sounds.soundEnabled) {
          if (icon) icon.textContent = '🔊';
          if (label) label.textContent = 'Sound: On';
          sounds.playPop();
        } else {
          if (icon) icon.textContent = '🔇';
          if (label) label.textContent = 'Sound: Off';
        }
      });
    }

    const ambientBtn = document.getElementById('ambientToggleBtn');
    if (ambientBtn) {
      ambientBtn.addEventListener('click', () => {
        sounds.playPop();
        const icon = ambientBtn.querySelector('.icon');
        const label = ambientBtn.querySelector('.label');
        const nextState = !sounds.ambientRunning;
        sounds.toggleAmbientNight(nextState);
        if (nextState) {
          if (icon) icon.textContent = '🌧️';
          if (label) label.textContent = 'Ambiance: On';
        } else {
          if (icon) icon.textContent = '✨';
          if (label) label.textContent = 'Ambiance: Off';
        }
      });
    }

    // 4. Modal Close Handlers
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) this.closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });

    // 5. Interactive Object Actions Delegation
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      const action = target.dataset.action;
      this.handleAction(action);
    });

    // 6. Lamp Sticky Note Close Button
    const closeSticky = document.getElementById('closeStickyBtn');
    if (closeSticky) {
      closeSticky.addEventListener('click', (e) => {
        e.stopPropagation();
        sounds.playPop();
        if (this.lampStickyNote) this.lampStickyNote.classList.remove('visible');
      });
    }
  }

  /* RAF-Throttled Butter-Smooth Parallax with Inertial Damping */
  initSmoothParallax() {
    if (!this.interactiveRoom) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isTicking = false;

    const onMouseMove = (e) => {
      if (!this.roomScreen.classList.contains('active')) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 4;
      targetY = (e.clientY / window.innerHeight - 0.5) * 4;

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(updateLoop);
      }
    };

    const updateLoop = () => {
      // Smooth linear interpolation (lerp)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      this.interactiveRoom.style.transform = `perspective(1000px) rotateY(${currentX.toFixed(2)}deg) rotateX(${(-currentY).toFixed(2)}deg)`;

      if (Math.abs(targetX - currentX) > 0.02 || Math.abs(targetY - currentY) > 0.02) {
        requestAnimationFrame(updateLoop);
      } else {
        isTicking = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
  }

  transitionToRoom() {
    if (!this.welcomeScreen || !this.roomScreen) return;
    this.welcomeScreen.classList.add('fade-leaving');
    setTimeout(() => {
      this.welcomeScreen.classList.remove('active', 'fade-leaving');
      this.roomScreen.classList.add('active', 'room-entering');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.roomScreen.classList.remove('room-entering');
      }, 500);
    }, 300);
  }

  transitionToWelcome() {
    if (!this.welcomeScreen || !this.roomScreen) return;
    this.roomScreen.classList.add('fade-leaving');
    setTimeout(() => {
      this.roomScreen.classList.remove('active', 'fade-leaving');
      this.welcomeScreen.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  handleAction(action) {
    switch (action) {
      case 'open-gallery':
        sounds.playPop();
        this.openGallery();
        break;
      case 'open-letters':
        sounds.playEnvelopeRustle();
        this.openLetters();
        break;
      case 'open-hug':
        sounds.playChime();
        this.openHug();
        break;
      case 'open-notebook':
        sounds.playEnvelopeRustle();
        this.openNotebook();
        break;
      case 'open-phone':
        sounds.playMessagePing();
        this.openPhone();
        break;
      case 'open-window':
        sounds.playChime();
        this.openWindow();
        break;
      case 'toggle-lamp':
        this.toggleLamp();
        break;
      case 'open-secret':
        sounds.playChime();
        this.openSecret();
        break;
    }
  }

  openModal(htmlContent) {
    if (this.modalDynamicBody) {
      this.modalDynamicBody.innerHTML = htmlContent;
    }
    if (this.modalOverlay) {
      this.modalOverlay.classList.add('open');
      this.modalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    voicePlayer.destroy();
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('open');
      this.modalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // --- 1. MEMORY SCRAPBOOK GALLERY ---
  openGallery() {
    const tmpl = document.getElementById('galleryTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    const container = document.getElementById('scrapbookContainer');
    if (container) {
      container.innerHTML = SAFE_PLACE_CONFIG.photos.map(p => `
        <figure class="scrapbook-item">
          <div class="scrapbook-polaroid-frame">
            <img src="${p.src}" alt="${p.alt}" loading="lazy" onerror="this.onerror=null; this.src='assets/photos/photo-01.jpg';" />
          </div>
          <figcaption class="scrapbook-caption-box">
            <p class="scrapbook-quote">"${p.caption}"</p>
            <span class="scrapbook-date">✦ ${p.date} ✦</span>
          </figcaption>
        </figure>
      `).join('');
    }
  }

  // --- 2. OPEN WHEN ENVELOPES ---
  openLetters() {
    const tmpl = document.getElementById('lettersTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    const grid = document.getElementById('envelopesGrid');
    if (grid) {
      grid.innerHTML = SAFE_PLACE_CONFIG.envelopes.map(env => `
        <button class="envelope-card" data-envelope-id="${env.id}" aria-label="${env.title}">
          <div class="env-stamp-badge">${env.icon}</div>
          <div class="env-text-box">
            <h4>${env.title}</h4>
            <p>${env.subtext}</p>
          </div>
        </button>
      `).join('');

      grid.querySelectorAll('.envelope-card').forEach(btn => {
        btn.addEventListener('click', () => {
          sounds.playEnvelopeRustle();
          btn.classList.add('opening-envelope');
          setTimeout(() => {
            const envId = btn.dataset.envelopeId;
            const found = SAFE_PLACE_CONFIG.envelopes.find(e => e.id === envId);
            if (found) this.openVoiceNote(found);
          }, 300);
        });
      });
    }
  }

  // --- 3. VOICE NOTE PLAYER ---
  openVoiceNote(envelope) {
    const tmpl = document.getElementById('audioPlayerTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    voicePlayer.setup(envelope);

    const backBtn = document.getElementById('backToEnvelopesBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        sounds.playPop();
        voicePlayer.destroy();
        this.openLetters();
      });
    }
  }

  // --- 4. TEDDY BEAR INTERNET HUG ---
  openHug() {
    const tmpl = document.getElementById('hugTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    this.spawnHeartShower();

    const anotherHugBtn = document.getElementById('sendAnotherHugBtn');
    if (anotherHugBtn) {
      anotherHugBtn.addEventListener('click', () => {
        sounds.playChime();
        this.spawnHeartShower();
      });
    }
  }

  spawnHeartShower() {
    if (!this.heartContainer) return;
    const symbols = ['❤️', '💖', '💕', '🌸', '✨', '🧸'];
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = (Math.random() * 80 + 10) + 'vw';
      heart.style.bottom = (Math.random() * 20 + 10) + 'vh';
      heart.style.fontSize = (Math.random() * 1.5 + 1.2) + 'rem';
      heart.style.animationDelay = (Math.random() * 0.5) + 's';
      this.heartContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }
  }

  // --- 5. NOTEBOOK ---
  openNotebook() {
    const tmpl = document.getElementById('notebookTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    const pages = document.getElementById('notebookPagesContainer');
    if (pages) {
      pages.innerHTML = SAFE_PLACE_CONFIG.notebook.map(item => `
        <div class="notebook-line-item">
          <span class="notebook-bullet">✦</span>
          <span>${item}</span>
        </div>
      `).join('');
    }
  }

  // --- 6. PHONE CHAT SIMULATOR ---
  openPhone() {
    const tmpl = document.getElementById('phoneTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    const timeEl = document.getElementById('chatTimeNow');
    if (timeEl) {
      const now = new Date();
      timeEl.textContent = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    }

    this.renderPhoneConversation();

    const replayBtn = document.getElementById('replayChatBtn');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        sounds.playPop();
        this.renderPhoneConversation();
      });
    }
  }

  renderPhoneConversation() {
    const container = document.getElementById('chatMessagesContainer');
    const indicator = document.getElementById('chatTypingIndicator');
    if (!container) return;

    container.innerHTML = '';
    const messages = SAFE_PLACE_CONFIG.chatMessages;

    messages.forEach((msg) => {
      setTimeout(() => {
        if (indicator) indicator.classList.add('active');
        setTimeout(() => {
          if (indicator) indicator.classList.remove('active');
          const bubble = document.createElement('div');
          bubble.className = `chat-bubble ${msg.sender}`;
          bubble.textContent = msg.text;
          container.appendChild(bubble);
          container.scrollTop = container.scrollHeight;
          sounds.playMessagePing();
        }, 400);
      }, msg.delay);
    });
  }

  // --- 7. PEACEFUL WINDOW NIGHT SKY ---
  openWindow() {
    const tmpl = document.getElementById('windowTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    const textEl = document.getElementById('breathingText');
    if (textEl) {
      let phase = 0;
      const phases = ['Breathe in...', 'Hold softly...', 'Exhale slowly...'];
      const interval = setInterval(() => {
        if (!document.getElementById('breathingText')) {
          clearInterval(interval);
          return;
        }
        phase = (phase + 1) % phases.length;
        textEl.textContent = phases[phase];
      }, 4000);
    }
  }

  // --- 8. LAMP TOGGLE & WARM LIGHTING ---
  toggleLamp() {
    sounds.playPop();
    this.lampOn = !this.lampOn;
    if (this.lampOn) {
      document.body.classList.add('lamp-on');
      document.body.classList.remove('lamp-off');
      if (this.lampStickyNote) this.lampStickyNote.classList.add('visible');
    } else {
      document.body.classList.remove('lamp-on');
      document.body.classList.add('lamp-off');
      if (this.lampStickyNote) this.lampStickyNote.classList.remove('visible');
    }
  }

  // --- 9. HIDDEN SECRET CONSTELLATION ---
  openSecret() {
    const tmpl = document.getElementById('secretTemplate');
    if (!tmpl) return;
    this.openModal(tmpl.innerHTML);

    const signoff = document.getElementById('secretSignoff');
    if (signoff) {
      signoff.textContent = SAFE_PLACE_CONFIG.secretLetter.signoff;
    }
  }
}

// Initialize smoothly
function startApp() {
  new StarCanvas('starCanvas');
  window.safePlaceApp = new SafePlaceApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
