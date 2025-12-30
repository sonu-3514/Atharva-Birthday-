import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti] = useState(true);

  const audioRef = useMemo(() => new Audio('/birthday-music.mp3'), []);

  useEffect(() => {
    audioRef.loop = true;
    return () => audioRef.pause();
  }, [audioRef]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  // More balloons for celebration!
  const balloons = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 3,
      color: ['🎈', '🎈', '🎈', '🎈', '🎈'][Math.floor(Math.random() * 5)],
      size: Math.random() * 2 + 3
    })), []
  );

  const floatingEmojis = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: Math.random() * 6 + 10,
      delay: Math.random() * 2,
      emoji: ['⭐', '✨', '❤️', '🎂', '🎁', '🎉', '🥳'][Math.floor(Math.random() * 7)],
      size: Math.random() * 1.5 + 2
    })), []
  );

  return (
    <div className="page-container">
      {showConfetti && <Confetti recycle={true} numberOfPieces={200} />}
      
      {/* Floating Balloons */}
      {balloons.map(balloon => (
        <motion.div
          key={`balloon-${balloon.id}`}
          className="absolute"
          style={{ 
            left: `${balloon.x}%`,
            fontSize: `${balloon.size}rem`
          }}
          initial={{ y: '120vh', opacity: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25]
          }}
          transition={{
            duration: balloon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: balloon.delay
          }}
        >
          {balloon.color}
        </motion.div>
      ))}

      {/* Floating Emojis */}
      {floatingEmojis.map(item => (
        <motion.div
          key={`emoji-${item.id}`}
          className="absolute"
          style={{ 
            left: `${item.x}%`,
            fontSize: `${item.size}rem`
          }}
          initial={{ y: '120vh', opacity: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 1, 1, 0],
            rotate: [0, 360, -360, 0]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
        className="flex flex-col items-center text-center z-10 relative"
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-pink-600 mb-4"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎉 Happy Birthday Atharva! 🎂
        </motion.h1>
        
        <motion.p 
          className="text-3xl md:text-4xl text-purple-700 mb-6 font-semibold"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Wishing You a Day Full of Joy & Love! 💖
        </motion.p>

        <motion.div
          className="text-5xl md:text-6xl mb-8"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🎈🎊🎁🥳🎉
        </motion.div>

        <motion.p 
          className="text-2xl text-blue-800 mb-4 max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          May your special day be filled with happiness, laughter, and wonderful memories! 🌟
        </motion.p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-6 shadow-2xl text-3xl z-50"
        animate={{ 
          boxShadow: [
            '0 0 20px rgba(236, 72, 153, 0.5)',
            '0 0 40px rgba(236, 72, 153, 0.8)',
            '0 0 20px rgba(236, 72, 153, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {isPlaying ? '🔇' : '🎵'}
      </motion.button>
    </div>
  );
}

export default Home;
