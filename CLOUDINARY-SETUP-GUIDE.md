# 📸 Cloudinary Setup Guide - Step by Step

## 🎯 What is Cloudinary?

Cloudinary is a **FREE** cloud storage for images, videos, and music.
It gives you URLs to use in your website instead of storing large files in Git.

**Benefits:**
- ✅ FREE (25GB storage, 25GB bandwidth/month)
- ✅ No credit card required
- ✅ Fast worldwide delivery
- ✅ Works perfectly with Vercel

---

## 📝 Step 1: Create Cloudinary Account (2 minutes)

### 1.1 Go to Cloudinary Website
Open this link in your browser:
```
https://cloudinary.com/users/register_free
```

### 1.2 Fill Registration Form
- **Email:** your-email@gmail.com
- **Password:** Create a strong password
- **Cloud Name:** Choose a name (example: `atharva-birthday`)
  - This will be in your URLs
  - Use only lowercase letters and dashes
  - Example: `atharva-birthday-2026`

### 1.3 Click "Sign Up"
- You'll receive a verification email
- Click the link in email to verify

### 1.4 Login to Dashboard
- Go to: https://cloudinary.com/console
- You'll see your dashboard

---

## 📹 Step 2: Upload Your Video (3 minutes)

### 2.1 Find Your Video File
Your video is here:
```
/home/sonu/Rudra birthday Webiste/public/videos/WhatsApp Video 2025-12-30 at 7.02.02 PM.mp4
```

### 2.2 Upload to Cloudinary

**Method A: Via Dashboard (Easy)**

1. In Cloudinary Dashboard, click **"Media Library"** (top menu)

2. Click the **"Upload"** button (blue button, top right)

3. Click **"Select File"** or drag and drop

4. Navigate to your video:
   ```
   /home/sonu/Rudra birthday Webiste/public/videos/
   ```

5. Select: `WhatsApp Video 2025-12-30 at 7.02.02 PM.mp4`

6. Click **"Open"** - Upload will start

7. Wait 2-3 minutes (shows progress bar)

8. When done, you'll see the video in Media Library

### 2.3 Get Video URL

1. Click on the uploaded video thumbnail

2. You'll see video details panel on right side

3. Look for **"URL"** section

4. Copy the URL (looks like):
   ```
   https://res.cloudinary.com/atharva-birthday/video/upload/v1735123456/WhatsApp_Video_2025-12-30_at_7.02.02_PM.mp4
   ```

5. **SAVE THIS URL** - you'll need it for your code!

**Example URL:**
```
https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v1735123456/video_abc123.mp4
```

---

## 🎵 Step 3: Upload Your Music (2 minutes)

### 3.1 Find Your Music File
Your music is here:
```
/home/sonu/Rudra birthday Webiste/public/music/happy-birthday-357371.mp3
```

### 3.2 Upload to Cloudinary

1. In Media Library, click **"Upload"** again

2. Click **"Select File"**

3. Navigate to:
   ```
   /home/sonu/Rudra birthday Webiste/public/music/
   ```

4. Select: `happy-birthday-357371.mp3`

5. Click **"Open"**

6. Wait for upload (30 seconds - 1 minute)

### 3.3 Get Music URL

1. Click on the uploaded music file

2. Copy the URL from details panel:
   ```
   https://res.cloudinary.com/atharva-birthday/video/upload/v1735123456/happy-birthday-357371.mp3
   ```

3. **SAVE THIS URL** - you'll need it for your code!

---

## 🖼️ Optional: Upload Images (If Needed)

### Images are Already in Git!
Your 12 photos are already included in Git and will work on Vercel.

**But if you want to use Cloudinary for images too:**

1. Go to:
   ```
   /home/sonu/Rudra birthday Webiste/public/images/
   ```

2. Upload each image to Cloudinary (same process as video)

3. Get URLs for all 12 images

4. Update HTML to use Cloudinary URLs instead of local paths

**Note:** This is OPTIONAL. Images work fine without Cloudinary.

---

## 💻 Step 4: Update Your Website Code (5 minutes)

### 4.1 Update Video URL

**File to Edit:** `/home/sonu/Rudra birthday Webiste/public/single-page-script.js`

**Find this code (around line 177):**
```javascript
const videoFiles = [
    'WhatsApp Video 2025-12-30 at 7.02.02 PM.mp4'
];
```

**Replace with your Cloudinary URL:**
```javascript
const videoFiles = [
    'https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v1735123456/your-video-name.mp4'
];
```

**Example:**
```javascript
const videoFiles = [
    'https://res.cloudinary.com/atharva-birthday/video/upload/v1735654321/WhatsApp_Video_2025-12-30_at_7.02.02_PM.mp4'
];
```

### 4.2 Update Music URL

**File to Edit:** `/home/sonu/Rudra birthday Webiste/public/single-page.html`

**Find this code (around line 335):**
```html
<audio id="bgMusic" loop>
    <source src="music/happy-birthday-357371.mp3" type="audio/mpeg">
</audio>
```

**Replace with your Cloudinary URL:**
```html
<audio id="bgMusic" loop>
    <source src="https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v1735123456/your-music-name.mp3" type="audio/mpeg">
</audio>
```

**Example:**
```html
<audio id="bgMusic" loop>
    <source src="https://res.cloudinary.com/atharva-birthday/video/upload/v1735654321/happy-birthday-357371.mp3" type="audio/mpeg">
</audio>
```

---

## 🚀 Step 5: Test Locally (2 minutes)

### 5.1 Open Your Website
```
http://localhost:4001/
```

### 5.2 Check if Video Works
1. Scroll to Gallery section
2. Video should load and play
3. If not, check if you copied URL correctly

### 5.3 Check if Music Works
1. Click the 🎵 button (bottom-right)
2. Music should play
3. If not, check browser console for errors

---

## 📤 Step 6: Push to GitHub & Deploy (3 minutes)

### 6.1 Commit Your Changes
```bash
cd "/home/sonu/Rudra birthday Webiste"
git add public/single-page-script.js public/single-page.html
git commit -m "Use Cloudinary URLs for video and music"
```

### 6.2 Push to GitHub
```bash
git push origin main
```

### 6.3 Wait for Vercel Deploy
- Vercel automatically detects the push
- Wait 1-2 minutes for deployment
- Check: https://atharva-first-birthday.vercel.app

### 6.4 Test on Vercel
1. Open: https://atharva-first-birthday.vercel.app
2. Check if video plays
3. Check if music plays
4. Test on mobile too!

---

## 🎯 Quick Checklist

- [ ] Create Cloudinary account
- [ ] Verify email
- [ ] Upload video (WhatsApp Video 2025-12-30 at 7.02.02 PM.mp4)
- [ ] Copy video URL
- [ ] Upload music (happy-birthday-357371.mp3)
- [ ] Copy music URL
- [ ] Update `single-page-script.js` with video URL
- [ ] Update `single-page.html` with music URL
- [ ] Test locally (http://localhost:4001/)
- [ ] Commit changes to Git
- [ ] Push to GitHub
- [ ] Wait for Vercel deploy
- [ ] Test on Vercel (https://atharva-first-birthday.vercel.app)
- [ ] Test on mobile

---

## 🔍 Troubleshooting

### Video Not Playing?
1. Check if URL is correct (no typos)
2. Check if URL starts with `https://res.cloudinary.com/`
3. Try opening URL directly in browser - should play video
4. Check browser console for errors (F12)

### Music Not Playing?
1. Check if URL is correct
2. Try opening URL directly in browser - should play music
3. Some browsers block auto-play - click 🎵 button manually
4. Check if `type="audio/mpeg"` is correct

### Upload Failed?
1. Check file size (max 100MB for free tier)
2. Check internet connection
3. Try uploading smaller file first (test)
4. Contact Cloudinary support (very helpful!)

---

## 📝 Example: Complete Working Code

### Video Code (single-page-script.js):
```javascript
const videoFiles = [
    'https://res.cloudinary.com/atharva-birthday/video/upload/v1735654321/birthday_video.mp4'
];
```

### Music Code (single-page.html):
```html
<audio id="bgMusic" loop>
    <source src="https://res.cloudinary.com/atharva-birthday/video/upload/v1735654321/birthday_song.mp3" type="audio/mpeg">
</audio>
```

---

## 💡 Pro Tips

### Tip 1: Rename Files in Cloudinary
After upload, you can rename files:
1. Click on file in Media Library
2. Click "Edit" icon
3. Change name to something simple like `birthday-video`
4. URL will be shorter and cleaner

### Tip 2: Create Folders
Organize your media:
1. Click "Create Folder" in Media Library
2. Name it "atharva-birthday"
3. Upload all files there
4. URLs will include folder name

### Tip 3: Multiple Videos
To add more videos later:
```javascript
const videoFiles = [
    'https://res.cloudinary.com/atharva-birthday/video/upload/v123/video1.mp4',
    'https://res.cloudinary.com/atharva-birthday/video/upload/v123/video2.mp4',
    'https://res.cloudinary.com/atharva-birthday/video/upload/v123/video3.mp4'
];
```

---

## ✅ Summary

**Total Time:** 15-20 minutes

**What You'll Get:**
- ✅ Video working on Vercel
- ✅ Music working on Vercel
- ✅ Images already working
- ✅ Fast worldwide delivery
- ✅ Mobile responsive
- ✅ FREE forever!

**Your URLs will look like:**
```
Video: https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v123/video.mp4
Music: https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v123/music.mp3
```

Just replace the old paths in your code with these URLs and you're done! 🎉

---

## 📞 Need Help?

**Cloudinary Support:**
- Website: https://support.cloudinary.com
- Email: support@cloudinary.com
- They respond within 24 hours!

**Or ask me!** I'm here to help! 😊

---

Made with ❤️ for Atharva's 1st Birthday | January 2, 2026
