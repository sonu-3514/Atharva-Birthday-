import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';

// Real images from the public/images folder
const actualImages = [
  '/images/1000329538.jpg',
  '/images/IMG-20250816-WA0025(1).jpg',
  '/images/IMG-20251230-WA0038.jpg',
  '/images/IMG-20251230-WA0051.jpg',
  '/images/IMG-20251230-WA0052(1).jpg',
  '/images/IMG-20251230-WA0053(1).jpg',
  '/images/IMG_20250403_115954.jpg',
  '/images/IMG_20250702_205648 (1).jpg',
  '/images/IMG_20250912_115024.jpg',
  '/images/IMG_20251230_161731.jpg',
  '/images/IMG_20251230_161915.jpg',
  '/images/IMG_20251230_164253.jpg'
];

function Gallery() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setUploadedImages(JSON.parse(localStorage.getItem('uploadedImages') || '[]'));
    setUploadedVideos(JSON.parse(localStorage.getItem('uploadedVideos') || '[]'));
  }, []);

  const allImages = [...actualImages, ...uploadedImages];

  // Floating balloons animation
  const balloons = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      size: Math.random() * 1.5 + 2.5
    })), []
  );

  return (
    <div className="page-container">
      {/* Floating Balloons Background */}
      {balloons.map(balloon => (
        <motion.div
          key={`balloon-${balloon.id}`}
          className="absolute"
          style={{ 
            left: `${balloon.x}%`,
            fontSize: `${balloon.size}rem`,
            zIndex: 0
          }}
          initial={{ y: '120vh', opacity: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: balloon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: balloon.delay
          }}
        >
          🎈
        </motion.div>
      ))}

      <motion.div 
        className="flex flex-col items-center text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-pink-600 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎨 Atharva's Beautiful Memories 📸
        </motion.h1>
        
        <motion.p 
          className="text-2xl text-purple-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Precious moments captured with love 💖
        </motion.p>

        {/* Beautiful Photo Gallery - No Gift Boxes! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-12 max-w-7xl">
          {allImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: index * 0.08, 
                type: 'spring', 
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() * 6 - 3,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              {/* Balloon Decoration on each photo */}
              <motion.div
                className="absolute -top-8 -right-4 text-4xl z-10"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🎈
              </motion.div>

              {/* Photo Frame with Beautiful Border */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2 transform transition-all">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={src} 
                    alt={`Atharva's Memory ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  >
                    <p className="text-white font-bold text-lg">
                      Click to View 🌟
                    </p>
                  </motion.div>
                </div>
                
                {/* Decorative Corner Stars */}
                <div className="absolute top-1 left-1 text-yellow-400 text-xl">✨</div>
                <div className="absolute top-1 right-1 text-yellow-400 text-xl">✨</div>
                <div className="absolute bottom-1 left-1 text-yellow-400 text-xl">⭐</div>
                <div className="absolute bottom-1 right-1 text-yellow-400 text-xl">⭐</div>
              </div>

              {/* Photo Number Badge */}
              <motion.div 
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                Photo #{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Videos Section */}
        {uploadedVideos.length > 0 && (
          <>
            <motion.h2 
              className="text-4xl font-bold text-purple-600 mb-6 mt-8"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎥 Adorable Video Moments ✨
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
              {uploadedVideos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2"
                  onClick={() => setPlayingVideo(i)}
                >
                  <video 
                    controls 
                    className="w-full rounded-xl"
                    onPlay={() => setPlayingVideo(i)}
                  >
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Overlay */}
                  {playingVideo !== i && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 pointer-events-none">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="text-white text-6xl drop-shadow-2xl"
                      >
                        ▶️
                      </motion.div>
                      <p className="absolute bottom-4 text-white text-xl font-bold drop-shadow-lg">
                        Tap to Play ❤️
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </motion.div>

      {/* Lightbox Modal for Selected Image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-[90vh]"
          >
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute top-4 right-4 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Gallery;
