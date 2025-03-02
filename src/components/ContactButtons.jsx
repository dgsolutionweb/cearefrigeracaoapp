import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaComments, FaTimes } from 'react-icons/fa';

const ContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Destinos dos links de contato
  const handleWhatsApp = () => {
    window.open('https://wa.me/5517991945725?text=Olá,%20gostaria%20de%20um%20orçamento', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:uxcaua@icloud.com', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/cearefrigeracao', '_blank');
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    hover: { 
      scale: 1.1,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-4">
      {/* Botão principal para abrir/fechar os contatos */}
      <motion.button
        className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-lg"
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        aria-label={isOpen ? 'Fechar menu de contato' : 'Abrir menu de contato'}
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaComments className="text-xl" />
        )}
      </motion.button>

      {/* Menu de contatos */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col space-y-3 items-end"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          >
            {/* WhatsApp */}
            <motion.div 
              className="flex items-center group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="bg-gray-800 text-white text-sm rounded-l-lg px-4 py-3 opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 mr-2 hidden md:block">
                Fale no WhatsApp
              </div>
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg"
                aria-label="Contato via WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </button>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="flex items-center group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="bg-gray-800 text-white text-sm rounded-l-lg px-4 py-3 opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 mr-2 hidden md:block">
                Envie um email
              </div>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#EA4335] text-white shadow-lg"
                aria-label="Contato via Email"
              >
                <FaEnvelope className="text-xl" />
              </button>
            </motion.div>

            {/* Instagram */}
            <motion.div 
              className="flex items-center group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div className="bg-gray-800 text-white text-sm rounded-l-lg px-4 py-3 opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 mr-2 hidden md:block">
                Siga no Instagram
              </div>
              <button
                onClick={handleInstagram}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-lg"
                aria-label="Siga no Instagram"
              >
                <FaInstagram className="text-xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButtons; 