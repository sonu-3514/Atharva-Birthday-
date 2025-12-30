# Example Video Configuration

This is an example showing how to add videos to your website.

## Current Video Configuration

Location: `/public/single-page-script.js` (around line 177)

```javascript
const videoFiles = [
    // Add your video filenames here, for example:
    // 'video1.mp4',
    // 'birthday-party.mp4',
    // 'cake-cutting.mov',
    // 'family-celebration.mp4'
];
```

## When You Add Videos

After copying videos to `/public/videos/` folder, update to:

```javascript
const videoFiles = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
];
```

## Video Will Display As:

```
╔════════════════════════════════════════╗
║        🎥 Birthday Videos 🎬           ║
╠════════════════════════════════════════╣
║                                        ║
║  [Video Player with Controls]          ║
║  Video #1                              ║
║                                        ║
║  [Video Player with Controls]          ║
║  Video #2                              ║
║                                        ║
║  [Video Player with Controls]          ║
║  Video #3                              ║
║                                        ║
╚════════════════════════════════════════╝
```

Then below videos, the 12 photos will display in 3-per-row layout.
