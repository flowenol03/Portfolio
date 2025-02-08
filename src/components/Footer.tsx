import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <motion.footer
      className="relative py-8 bg-gray-900 text-white text-center overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 blur-3xl animate-pulse"
      ></motion.div>

      {/* Floating Glow Particles */}
      <motion.div
        className="absolute top-0 left-1/4 w-6 h-6 bg-blue-400 rounded-full blur-md opacity-50 animate-float"
      ></motion.div>
      <motion.div
        className="absolute bottom-4 right-1/3 w-8 h-8 bg-pink-400 rounded-full blur-lg opacity-50 animate-float"
      ></motion.div>

      {/* Footer Content */}
      <motion.p
        className="relative text-lg font-semibold tracking-wider text-gray-300 hover:text-white transition duration-300 cursor-pointer"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 12px rgba(255,255,255,0.9)",
        }}
      >
        &copy; {currentYear} Prathamesh Khandekar. All rights reserved.
      </motion.p>

      {/* Animated Divider Line */}
      <motion.div
        className="w-0 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "12rem" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      {/* Bottom Neon Glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-pink-500 blur-md opacity-75"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      ></motion.div>
    </motion.footer>
  );
};

export default Footer;
