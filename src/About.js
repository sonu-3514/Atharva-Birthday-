import { motion } from 'framer-motion';

function About() {
  return (
    <div className="page-container flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <h1 className="text-5xl font-bold text-pink-600 mb-4">About Darling Atharva ❤️</h1>
        <p className="text-xl text-blue-800 mb-6 max-w-3xl">
          Atharva was born on January 2, 2025 – a bundle of joy who lights up our world! 🌟<br />
          Now, as we celebrate his first birthday on January 2, 2026, we're so grateful for every smile, giggle, and adventure. 🥰<br />
          From cute outfits to family trips, Atharva's journey is full of love and fun!
        </p>
        <motion.img 
          src={process.env.PUBLIC_URL + '/images/image7.jpg'} 
          alt="Atharva's Family"
          className="max-w-md rounded-lg shadow-lg mx-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
        <p className="text-lg text-gray-600 mt-4">Our happy family moment! 👨‍👩‍👧</p>
      </motion.div>
    </div>
  );
}

export default About;
