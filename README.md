# 🌙 Pochiiii's Safe Place

> *"A private little digital world made specifically for one person — comforting, cozy, magical, and full of little secrets."*

---

## 🌟 Overview

**Pochiiii's Safe Place** is a deeply personal, interactive safe space website designed for your best friend, Pochiiii. 

It is designed as an interactive, living room at night where everything is discoverable by clicking objects:
* 📸 **Polaroid Photo Wall**: Opens a full-screen vertical scrapbook with warm memory captions.
* 💌 **Open When Keepsake Box**: Contains 8 custom envelopes that open into a dedicated aesthetic voice-note player with live animated waveforms.
* 🧸 **Teddy Bear**: Triggers an "emergency internet hug" with floating heart bursts.
* 📖 **Notebook ("Little Things")**: A handwritten journal with comforting truths for the hard days.
* 📱 **Phone**: A cute fictional messaging simulator with typing animations and inside jokes.
* 🌙 **Window**: A peaceful night sky immersion with shooting stars and a 4-4-4 calming breathing pacer.
* 🕯️ **Bedside Lamp**: Toggles the room lighting into a warm golden hue and reveals a floating reminder note.
* ✨ **Hidden Secret Star**: A discreet easter egg by the baseboards revealing a constellation and your touching sign-off letter.

---

## 🚀 How to Run Locally

You can run this project with zero build steps and no frameworks required:

### Option 1: Direct Double Click
Simply double-click `index.html` in your file explorer to open it in any web browser (Chrome, Safari, Edge, Firefox).

### Option 2: Local HTTP Server (Recommended for audio/photos)
Open PowerShell or your terminal in this directory and run:
```bash
# Using Python:
python -m http.server 8000

# OR using Node / npx:
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 📸 How to Replace the Photos

Your memories appear in the Polaroid wall and the full-screen scrapbook. To add your real photos:

1. Place your images in `assets/photos/`.
2. Name them:
   - `photo-01.jpg`
   - `photo-02.jpg`
   - `photo-03.jpg`
   - `photo-04.jpg`
   - `photo-05.jpg`
   - `photo-06.jpg`
3. *(Optional)* If you have PNG or WebP images, you can change the file paths or customize memory captions in `script.js` inside the `SAFE_PLACE_CONFIG.photos` array.

---

## 🎙️ How to Add the 8 Voice Recordings

Inside the **Open When** box, each envelope plays a dedicated voice recording.

1. Record your voice messages (1–3 minutes each). MP3 format is recommended.
2. Place the audio files into `assets/audio/` with these exact names:
   1. `open-when-crying.mp3` — *Open when you need to cry*
   2. `open-when-hug.mp3` — *Open when you need a hug*
   3. `open-when-sleep.mp3` — *Open when you can't sleep*
   4. `open-when-overthinking.mp3` — *Open when you're overthinking*
   5. `open-when-laugh.mp3` — *Open when you need to laugh*
   6. `open-when-alone.mp3` — *Open when you feel alone*
   7. `open-when-motivation.mp3` — *Open when you need motivation*
   8. `open-when-miss-us.mp3` — *Open when you miss our conversations*

> **Note**: If any recording file is missing or not yet added, the website will gracefully play a gentle synthesizer lullaby as a cozy placeholder without throwing errors!

---

## ✏️ How to Customize Text & Inside Jokes

All text is organized in one clean, obvious place at the very top of `script.js` in the `SAFE_PLACE_CONFIG` object:

* **Chat Messages**: Customize the conversation bubbles in `SAFE_PLACE_CONFIG.chatMessages`.
* **Notebook Lines**: Add or edit the comfort quotes in `SAFE_PLACE_CONFIG.notebook`.
* **Envelopes & Personal Notes**: Edit `SAFE_PLACE_CONFIG.envelopes`.
* **Final Secret Letter**: Edit the sign-off and stanzas in `SAFE_PLACE_CONFIG.secretLetter`.

---

## 🌐 Deploy to Vercel (Free & Instant)

This project has zero dependencies and is 100% static, making deployment to Vercel effortless:

### Method 1: Via Vercel Web Dashboard (Easiest)
1. Push this folder to a new repository on [GitHub](https://github.com).
2. Go to [Vercel](https://vercel.com) and log in.
3. Click **"Add New Project"** and select **"Import Git Repository"**.
4. Choose your repository.
5. Vercel settings:
   - **Framework Preset**: `Other` (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: *Leave blank*
   - **Output Directory**: *Leave blank*
6. Click **Deploy**! In seconds, you will receive a public link to share with Pochiiii.

### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the simple prompts, accept the defaults, and your site is live!

---

## 📱 Mobile Friendly

The entire website is mobile-responsive:
- On desktop, it offers an immersive isometric perspective with hover tooltips and dynamic lighting.
- On smartphones, objects scale naturally, touch targets are generous, and a convenient quick-shelf allows effortless tapping through all experiences.

---

*Made with love for Pochiiii. ❤️*
