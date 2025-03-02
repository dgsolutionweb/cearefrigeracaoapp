import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animação Lottie para ar-condicionado
// Normalmente importaríamos um arquivo JSON, mas para o exemplo usaremos um objeto simples
const acAnimation = {
  v: "5.7.6",
  fr: 30,
  ip: 0,
  op: 60,
  w: 400,
  h: 400,
  nm: "AC Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shape Layer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { t: 60, s: [360] }
          ],
          ix: 10
        },
        p: { a: 0, k: [200, 200, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [100, 100], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            },
            {
              ty: "st",
              c: { a: 0, k: [0.29, 0.41, 0.85, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 10, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform"
            }
          ],
          nm: "Ellipse 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false
        }
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0
    }
  ],
  markers: []
};

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-darkBlue to-primary flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-32">
            <Lottie animationData={acAnimation} loop={true} />
          </div>
          <motion.h2
            className="text-white font-bold text-2xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            C&A Refrigeração
          </motion.h2>
          <motion.div
            className="w-64 h-1 bg-white/30 rounded-full mt-6 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 