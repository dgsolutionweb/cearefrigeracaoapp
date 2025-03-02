import { motion } from 'framer-motion';

const Slogan = () => {
  return (
    <motion.div
      className="text-center mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <h2 className="text-2xl text-white font-semibold">
        Excelência em Refrigeração
      </h2>
    </motion.div>
  );
};

export default Slogan; 