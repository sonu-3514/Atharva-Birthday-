# 🎉 Atharva's Birthday Website

Beautiful birthday website inspired by https://github.com/ProgrammerGaurav/happy-birthday

## Features ✨
- Golden "Start" button with shimmer effect
- Falling snowflakes animation
- Confetti ribbons and papers animation
- Animated typing birthday messages  
- Birthday cake GIF animation
- Balloon borders floating up
- Background music player
- Responsive design for all devices

## Setup Instructions 📝

### Required Files to Add:

1. **birthday-banner.png** - Add a "Happy Birthday" banner image
   - Place in `public/` folder
   - Recommended size: 800x200px

2. **birthday-cake.gif** - Add an animated birthday cake GIF
   - Place in `public/` folder  
   - Find a cute animated cake GIF online

3. **balloon-border.png** - Add a balloon border image
   - Place in `public/` folder
   - Should show colorful balloons at the bottom

4. **birthday-music.mp3** - Add birthday song  
   - Already have instructions for this
   - Place in `public/` folder

### How to Run:

1. **Add the required images** to `public/` folder

2. **Open the website**:
   ```bash
   # Option 1: Directly open the HTML file
   Open public/index-new.html in your browser
   
   # Option 2: Use a local server (recommended)
   cd public
   python3 -m http.server 8000
   # Then visit: http://localhost:8000/index-new.html
   ```

3. **Click the golden "Start" button** to begin the celebration!

## How It Works:

1. **Loading Screen**: Shows a beautiful gradient background with golden "Start" button and falling snowflakes
2. **Click Start**: Snowflakes disappear, confetti begins, music plays, balloons float up
3. **Main Page**: Shows birthday banner, name animation, typing messages, and animated cake

## Where to Find Images:

### Birthday Banner:
- Search "happy birthday banner png transparent" on Google Images
- Or use: https://www.flaticon.com/search?word=birthday%20banner

### Animated Cake GIF:
- Search "animated birthday cake gif" on Google
- Or use: https://giphy.com/search/birthday-cake

### Balloon Border:
- Search "balloon border png transparent" 
- Or create one with balloons at the bottom

## Customization:

### Change the name:
Edit `public/index-new.html` lines 29 and 38:
```html
<div id="name" class="area">Atharva</div>
<h2>Happy Birthday <i id="nae">Atharva</i></h2>
```

### Change messages:
Edit the typed strings in `public/index-new.html` lines 40-44

### Change colors:
Edit `public/birthday-style.css` - look for color codes like `#C4515C`

## 🎂 Perfect for Atharva's 1st Birthday on January 2, 2026!

Enjoy the celebration! 🎉🎈🎁
