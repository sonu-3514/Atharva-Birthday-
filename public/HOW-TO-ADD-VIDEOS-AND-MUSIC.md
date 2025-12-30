# 📹 How to Add Videos and Music to Your Website

## 🎯 **QUICK START GUIDE**

Your website now loads videos and music **directly from folders** (just like images)!

---

## 📹 **HOW TO ADD VIDEOS**

### Step 1: Copy Your Video Files

1. Open the folder: `/home/sonu/Rudra birthday Webiste/public/videos/`
2. Copy your video files into this folder
3. **Supported formats:** MP4, MOV, AVI, WEBM

**Example:**
```
/public/videos/
  ├── birthday-party.mp4
  ├── cake-cutting.mp4
  ├── family-celebration.mov
  └── atharva-playing.mp4
```

### Step 2: Update the JavaScript Code

1. Open file: **`/public/single-page-script.js`**
2. Find this section (around line 177-184):

```javascript
// List of video files in /public/videos/ folder
// Add your video filenames here (update this array when you add new videos)
const videoFiles = [
    // Add your video filenames here, for example:
    // 'video1.mp4',
    // 'birthday-party.mp4',
    // 'cake-cutting.mov',
    // 'family-celebration.mp4'
];
```

3. **Add your video filenames** inside the array:

```javascript
const videoFiles = [
    'birthday-party.mp4',
    'cake-cutting.mp4',
    'family-celebration.mov',
    'atharva-playing.mp4'
];
```

### Step 3: Refresh Website

- Refresh the browser
- Videos will appear at **TOP of Gallery section**
- Videos show in 3-per-row layout (desktop)
- Videos show in 1-per-row layout (mobile)

---

## 🎵 **HOW TO ADD BACKGROUND MUSIC**

### Step 1: Get Birthday Music File

**Option 1: Download from YouTube**
1. Find birthday song on YouTube
2. Use online converter (e.g., y2mate.com, ytmp3.cc)
3. Download as MP3

**Option 2: Use Your Own Music**
- Any MP3, WAV, or OGG file

### Step 2: Add Music File

1. Open folder: `/home/sonu/Rudra birthday Webiste/public/music/`
2. Copy your music file into this folder
3. **IMPORTANT:** Rename the file to: **`birthday-music.mp3`**

**Correct structure:**
```
/public/music/
  └── birthday-music.mp3   ← Must be this exact name!
```

### Step 3: Test Music

1. Refresh the website
2. Music will **auto-play** (if browser allows)
3. Click **🎵 button** (bottom-right) to play/pause
4. Music loops continuously

---

## 📱 **MOBILE RESPONSIVE FEATURES**

Your website is now **fully mobile optimized**:

### Desktop (> 1024px):
- ✅ 3 photos per row
- ✅ 2-3 videos per row
- ✅ Full navigation bar
- ✅ Large text and buttons

### Tablet (768px - 1024px):
- ✅ 2 photos per row
- ✅ 2 videos per row
- ✅ Adjusted navigation
- ✅ Medium-sized elements

### Mobile (< 768px):
- ✅ 1 photo per row
- ✅ 1 video per row
- ✅ Compact navigation
- ✅ Touch-friendly buttons
- ✅ Optimized text sizes
- ✅ Smaller cake animation
- ✅ Full-width videos
- ✅ Easy-to-tap music button

---

## 🚀 **COMPLETE EXAMPLE**

### Adding 3 Videos:

**1. Copy videos to folder:**
```bash
cp ~/Downloads/party.mp4 "/home/sonu/Rudra birthday Webiste/public/videos/"
cp ~/Downloads/cake.mp4 "/home/sonu/Rudra birthday Webiste/public/videos/"
cp ~/Downloads/family.mp4 "/home/sonu/Rudra birthday Webiste/public/videos/"
```

**2. Update JavaScript:**
Open `single-page-script.js` and change:

```javascript
const videoFiles = [
    'party.mp4',
    'cake.mp4',
    'family.mp4'
];
```

**3. Refresh browser** - Done! Videos appear in gallery!

### Adding Music:

**1. Copy music file:**
```bash
cp ~/Downloads/happy-birthday.mp3 "/home/sonu/Rudra birthday Webiste/public/music/birthday-music.mp3"
```

**2. Refresh browser** - Music plays automatically!

---

## 🎨 **VIDEO DISPLAY FEATURES**

When you add videos, they will:
- ✅ Display at **TOP** of gallery section
- ✅ Show **before photos**
- ✅ Have built-in video controls (play, pause, volume)
- ✅ Show "Video #1", "Video #2" labels
- ✅ Auto-adjust for mobile screens
- ✅ Support all video formats
- ✅ Load with metadata preloading (faster)

---

## 📂 **FOLDER STRUCTURE**

Your website structure:
```
/public/
  ├── images/                    ← Photos (12 images)
  │   ├── 1000329538.jpg
  │   ├── IMG-20250816-WA0025(1).jpg
  │   └── ... (10 more)
  │
  ├── videos/                    ← Videos (add here!)
  │   ├── birthday-party.mp4
  │   ├── cake-cutting.mp4
  │   └── ... (add more videos)
  │
  ├── music/                     ← Music (add here!)
  │   └── birthday-music.mp3
  │
  ├── single-page.html           ← Main website
  ├── single-page-style.css      ← Styles
  └── single-page-script.js      ← JavaScript (update videoFiles array here!)
```

---

## ⚠️ **IMPORTANT NOTES**

### For Videos:
- ✅ Add videos to `/public/videos/` folder
- ✅ Update `videoFiles` array in `single-page-script.js`
- ✅ Use short, simple filenames (no spaces)
- ✅ Recommended: MP4 format for best compatibility
- ✅ Keep videos under 50MB each for fast loading

### For Music:
- ✅ Add music to `/public/music/` folder
- ✅ **MUST** be named `birthday-music.mp3`
- ✅ MP3 format recommended
- ✅ Browser may block auto-play (user can click 🎵 button)

### For Mobile:
- ✅ Website is fully responsive
- ✅ Test on phone before deployment
- ✅ Videos auto-resize for mobile screens
- ✅ Touch-friendly buttons and controls

---

## 🎉 **DEPLOYMENT READY**

After adding videos and music:

1. ✅ Website works on desktop
2. ✅ Website works on mobile
3. ✅ Videos load from folder
4. ✅ Music plays automatically
5. ✅ All features responsive
6. ✅ Ready to deploy!

---

## 🔧 **TROUBLESHOOTING**

### Videos Not Showing?
1. Check videos are in `/public/videos/` folder
2. Check filenames match in `videoFiles` array
3. Check video format is supported (use MP4)
4. Refresh browser (Ctrl+F5)

### Music Not Playing?
1. Check file is named `birthday-music.mp3`
2. Check file is in `/public/music/` folder
3. Click 🎵 button (browser may block auto-play)
4. Check file format (use MP3)

### Mobile Issues?
1. Test on actual mobile device (not just browser resize)
2. Check responsive breakpoints work
3. Videos should be 1-per-row on mobile
4. Navigation should be compact

---

## 💖 **SUMMARY**

**Videos:** Copy to `/videos/` folder → Update `videoFiles` array → Refresh  
**Music:** Copy to `/music/` folder → Rename to `birthday-music.mp3` → Refresh  
**Mobile:** Already responsive! Test on phone before deployment.

---

Made with ❤️ for Atharva's 1st Birthday!
