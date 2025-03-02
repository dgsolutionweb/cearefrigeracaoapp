import { motion } from 'framer-motion';
import logoImage from '../assets/images/logo.jpeg';

// Componente de logotipo animado usando a imagem real da empresa
const Logo = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden mb-2">
        <img 
          src={logoImage} 
          alt="C&A Refrigeração Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <motion.h1
        className="text-white text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        REFRIGERAÇÃO
      </motion.h1>
    </motion.div>
  );
};

export default Logo; 