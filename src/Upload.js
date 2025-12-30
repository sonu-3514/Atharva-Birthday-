import { useState } from 'react';
import { motion } from 'framer-motion';

function Upload() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => setImages(e.target.files);
  const handleVideoChange = (e) => setVideos(e.target.files);

  const handleUpload = () => {
    if (images.length === 0 && videos.length === 0) {
      setMessage('Please select at least one file!');
      return;
    }

    // Save images
    Array.from(images).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const existing = JSON.parse(localStorage.getItem('uploadedImages') || '[]');
        existing.push(e.target.result);
        localStorage.setItem('uploadedImages', JSON.stringify(existing));
      };
      reader.readAsDataURL(file);
    });

    // Save videos
    Array.from(videos).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const existing = JSON.parse(localStorage.getItem('uploadedVideos') || '[]');
        existing.push(e.target.result);
        localStorage.setItem('uploadedVideos', JSON.stringify(existing));
      };
      reader.readAsDataURL(file);
    });

    setMessage('🎉 Uploaded successfully! Check the Gallery! 🎉');
    setTimeout(() => {
      setImages([]);
      setVideos([]);
      document.getElementById('imageInput').value = '';
      document.getElementById('videoInput').value = '';
    }, 100);
  };

  return (
    <div className="page-container flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold text-pink-600 mb-6">Upload Atharva's Memories 🎈</h1>
        <p className="text-xl text-blue-800 mb-8">Add new photos & videos – they'll appear in the Gallery instantly!</p>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-2">📸 Upload Photos (multiple)</label>
            <input 
              id="imageInput"
              type="file" 
              multiple 
              accept="image/*" 
              onChange={handleImageChange}
              className="w-full p-4 border-4 border-dashed border-pink-300 rounded-lg"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold mb-2">🎥 Upload Videos (MP4)</label>
            <input 
              id="videoInput"
              type="file" 
              multiple 
              accept="video/mp4"
              onChange={handleVideoChange}
              className="w-full p-4 border-4 border-dashed border-blue-300 rounded-lg"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleUpload}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg"
          >
            Upload to Gallery ✨
          </motion.button>

          {message && (
            <motion.p 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-2xl mt-6 text-green-600 font-bold"
            >
              {message}
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Upload;
