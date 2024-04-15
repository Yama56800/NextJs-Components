"use client";
import { motion } from "framer-motion";

const FuturisticHeading = () => {
  // Définir les variantes d'animation pour Framer Motion
  const variants = {
    initial: {
      scale: 1,
      textShadow: "0 0 8px rgba(255, 255, 255, 0)", // Ombre initiale plus subtile ou aucune ombre
    },
    hover: {
      scale: 1.05,
      textShadow: "0 0 8px rgba(255, 255, 255, 1)", // Ombre plus prononcée au survol
    },
  };

  return (
    <motion.h1
      className="text-6xl text-center font-bold text-white p-16 z-20"
      variants={variants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.5 }}
    >
      TOMO
    </motion.h1>
  );
};

export default FuturisticHeading;
