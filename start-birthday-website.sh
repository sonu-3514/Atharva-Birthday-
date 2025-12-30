#!/bin/bash

# Birthday Website Launcher
echo "🎉 Starting Atharva's Birthday Website... 🎂"
echo ""

cd "$(dirname "$0")/public"

# Check if index-new.html exists
if [ ! -f "index-new.html" ]; then
    echo "❌ Error: index-new.html not found!"
    exit 1
fi

echo "✅ Files found!"
echo "🌐 Starting web server on port 8000..."
echo ""

# Start Python HTTP server
python3 -m http.server 8000 &
SERVER_PID=$!

sleep 2

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🎈 Birthday Website is Ready! 🎈"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "  🌐 Local:    http://localhost:8000/index-new.html"
echo "  📱 Network:  http://$(hostname -I | awk '{print $1}'):8000/index-new.html"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "👉 Open the URL above in your browser!"
echo "🎵 Make sure to add birthday-music.mp3 for music"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Keep script running
wait $SERVER_PID
