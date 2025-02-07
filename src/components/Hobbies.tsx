import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Hobbies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const animeList = [
    { name: 'Berserk', image: '/images/berserk.jpg', description: 'A dark fantasy epic of revenge and fate...', rating: 5 },
    { name: 'Death Note', image: '/images/deathnote.jpg', description: 'A psychological thriller about justice and power...', rating: 4 },
    { name: 'Naruto', image: '/images/naruto.jpg', description: 'A young ninja’s journey to becoming Hokage...', rating: 5 },
    { name: 'Naruto Shippuden', image: '/images/narutoshippuden.jpg', description: 'The continuation of Naruto’s journey...', rating: 5 },
    { name: 'Demon Slayer', image: '/images/demonslayer.jpg', description: 'A tale of demons and revenge...', rating: 5 },
    { name: 'Black Clover', image: '/images/blackclover.png', description: 'A story of magic and determination...', rating: 4 },
    { name: 'My Hero Academia', image: '/images/mha.webp', description: 'A journey to becoming the greatest hero...', rating: 5 },
    { name: 'Classroom of the Elite', image: '/images/classroom.jpg', description: 'A school where intelligence is key...', rating: 4 },
    { name: 'Jujutsu Kaisen', image: '/images/jujutsu.jpg', description: 'A battle against curses and fate...', rating: 5 },
    { name: 'Tokyo Revengers', image: '/images/tokyo.jpg', description: 'A time-traveling delinquent story...', rating: 4 },
    { name: 'Bleach', image: '/images/bleach.jpg', description: 'A soul reaper’s fight against evil...', rating: 5 },
    { name: 'Wind Breaker', image: '/images/windbreaker.jpg', description: 'A story of street racing and speed...', rating: 4 },
    { name: 'Solo Leveling', image: '/images/sololeveling.avif', description: 'A journey of power and dungeons...', rating: 5 },
    { name: 'Haikyuu', image: '/images/haikyuu.jpg', description: 'A volleyball player’s rise to greatness...', rating: 5 },
    { name: 'Kaiju No. 8', image: '/images/kaiju.jpeg', description: 'A fight against monstrous Kaiju...', rating: 5 },
    { name: 'Summer Time Rendering', image: '/images/summer.webp', description: 'A time-loop mystery thriller...', rating: 4 },
    { name: 'Blue Lock', image: '/images/bluelock.jpeg', description: 'A football battle for supremacy...', rating: 5 },
    { name: 'One Piece', image: '/images/onepiece.jpg', description: 'A grand adventure for the One Piece...', rating: 5 },
    { name: 'Re:Zero', image: '/images/rezero.jpg', description: 'A psychological fantasy thriller...', rating: 4 },
    { name: 'Hell’s Paradise', image: '/images/hells.jpg', description: 'A ninja’s quest for redemption...', rating: 5 },
    { name: 'Plunderer', image: '/images/plunderer.jpg', description: 'A world ruled by numbers...', rating: 4 },
    { name: 'Seven Deadly Sins', image: '/images/sds.jpg', description: 'A legendary tale of knights and magic...', rating: 5 }
  ];

  const nextAnime = () => {
    setActiveIndex((prev) => (prev + 1) % animeList.length);
  };

  const prevAnime = () => {
    setActiveIndex((prev) => (prev - 1 + animeList.length) % animeList.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Hobbies</span>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevAnime}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/50 rounded-full backdrop-blur-md hover:bg-gray-700 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Anime Display */}
          <div className="overflow-hidden w-full max-w-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {animeList.map((anime, index) => (
                <div key={anime.name} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                    <div className="relative group overflow-hidden rounded-lg">
                      {/* Anime Image and Hover Overlay */}
                      <div className="relative w-full h-[400px] overflow-hidden">
                        <img
                          src={anime.image}
                          alt={anime.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Hover Overlay (Now Covers Fully) */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 flex items-center justify-center">
                          <div className="text-center px-4">
                            <h3 className="text-xl font-bold text-white">{anime.name}</h3>
                            <p className="text-sm text-gray-300 mt-2">{anime.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Anime Details */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{anime.name}</h3>
                      <div className="flex items-center justify-center space-x-1">
                        {Array.from({ length: anime.rating }).map((_, index) => (
                          <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextAnime}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-800/50 rounded-full backdrop-blur-md hover:bg-gray-700 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
