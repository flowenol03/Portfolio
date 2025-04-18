import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Import images
import berserkImage from '../images/berserk.jpg';
import deathNoteImage from '../images/deathnote.jpg';
import narutoImage from '../images/naruto.jpg';
import narutoShippudenImage from '../images/narutoshippuden.jpg';
import demonSlayerImage from '../images/demonslayer.jpg';
import blackCloverImage from '../images/blackclover.png';
import mhaImage from '../images/mha.webp';
import classroomEliteImage from '../images/classroom.jpg';
import jujutsuKaisenImage from '../images/jujutsu.jpg';
import tokyoRevengersImage from '../images/tokyo.jpg';
import bleachImage from '../images/bleach.jpg';
import windBreakerImage from '../images/windbreaker.jpg';
import soloLevelingImage from '../images/sololeveling.avif';
import haikyuuImage from '../images/haikyuu.jpg';
import kaijuImage from '../images/kaiju.jpeg';
import summerTimeImage from '../images/summer.webp';
import blueLockImage from '../images/bluelock.jpeg';
import onePieceImage from '../images/onepiece.jpg';
import rezeroImage from '../images/rezero.jpg';
import hellsParadiseImage from '../images/hells.jpg';
import plundererImage from '../images/plunderer.jpg';
import sevenDeadlySinsImage from '../images/sds.jpg';

const Hobbies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const animeList = [
    { name: 'Berserk', image: berserkImage, description: 'A dark fantasy epic of revenge and fate...', rating: 5 },
    { name: 'Death Note', image: deathNoteImage, description: 'A psychological thriller about justice and power...', rating: 4 },
    { name: 'Naruto', image: narutoImage, description: 'A young ninja’s journey to becoming Hokage...', rating: 5 },
    { name: 'Naruto Shippuden', image: narutoShippudenImage, description: 'The continuation of Naruto’s journey...', rating: 5 },
    { name: 'Demon Slayer', image: demonSlayerImage, description: 'A tale of demons and revenge...', rating: 5 },
    { name: 'Black Clover', image: blackCloverImage, description: 'A story of magic and determination...', rating: 4 },
    { name: 'My Hero Academia', image: mhaImage, description: 'A journey to becoming the greatest hero...', rating: 5 },
    { name: 'Classroom of the Elite', image: classroomEliteImage, description: 'A school where intelligence is key...', rating: 4 },
    { name: 'Jujutsu Kaisen', image: jujutsuKaisenImage, description: 'A battle against curses and fate...', rating: 5 },
    { name: 'Tokyo Revengers', image: tokyoRevengersImage, description: 'A time-traveling delinquent story...', rating: 4 },
    { name: 'Bleach', image: bleachImage, description: 'A soul reaper’s fight against evil...', rating: 5 },
    { name: 'Wind Breaker', image: windBreakerImage, description: 'A story of street racing and speed...', rating: 4 },
    { name: 'Solo Leveling', image: soloLevelingImage, description: 'A journey of power and dungeons...', rating: 5 },
    { name: 'Haikyuu', image: haikyuuImage, description: 'A volleyball player’s rise to greatness...', rating: 5 },
    { name: 'Kaiju No. 8', image: kaijuImage, description: 'A fight against monstrous Kaiju...', rating: 5 },
    { name: 'Summer Time Rendering', image: summerTimeImage, description: 'A time-loop mystery thriller...', rating: 4 },
    { name: 'Blue Lock', image: blueLockImage, description: 'A football battle for supremacy...', rating: 5 },
    { name: 'One Piece', image: onePieceImage, description: 'A grand adventure for the One Piece...', rating: 5 },
    { name: 'Re:Zero', image: rezeroImage, description: 'A psychological fantasy thriller...', rating: 4 },
    { name: 'Hell’s Paradise', image: hellsParadiseImage, description: 'A ninja’s quest for redemption...', rating: 5 },
    { name: 'Plunderer', image: plundererImage, description: 'A world ruled by numbers...', rating: 4 },
    { name: 'Seven Deadly Sins', image: sevenDeadlySinsImage, description: 'A legendary tale of knights and magic...', rating: 5 }
  ];

  const nextAnime = () => {
    setActiveIndex((prev) => (prev + 1) % animeList.length);
  };

  const prevAnime = () => {
    setActiveIndex((prev) => (prev - 1 + animeList.length) % animeList.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glitch">
        My <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Hobbies</span>
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        <motion.button
          onClick={prevAnime}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/60 rounded-full hover:bg-gray-700 transition-all backdrop-blur-md"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        <div className="w-full max-w-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={animeList[activeIndex].name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/80 border-2 border-purple-500 rounded-xl shadow-2xl p-6 text-center flex flex-col items-center transform transition-all"
            >
              <motion.img
                src={animeList[activeIndex].image}
                alt={animeList[activeIndex].name}
                className="w-full h-72 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-purple-500/50"
              />
              <h3 className="text-2xl font-bold mt-4">{animeList[activeIndex].name}</h3>
              <p className="text-gray-300 text-sm mt-2">{animeList[activeIndex].description}</p>
              <div className="flex items-center justify-center mt-4 space-x-1">
                {Array.from({ length: animeList[activeIndex].rating }).map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextAnime}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/60 rounded-full hover:bg-gray-700 transition-all backdrop-blur-md"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Dot Pagination */}
      <div className="flex mt-8 space-x-2">
        {animeList.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? 'bg-purple-500 w-6' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
