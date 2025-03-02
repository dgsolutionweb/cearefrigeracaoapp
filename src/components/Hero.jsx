import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaShieldAlt, FaSnowflake, FaRegClock } from 'react-icons/fa';
import logoImage from '../assets/images/logo.jpeg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito parallax suave
  const parallaxOffset = -scrollY * 0.3;

  // Configurações dos flocos de gelo animados
  const iceParticles = Array.from({ length: 20 }).map((_, index) => {
    // Posições aleatórias
    const left = Math.random() * 100;
    const size = Math.random() * 15 + 5; // Tamanho entre 5 e 20px
    const delay = Math.random() * 5; // Delay aleatório
    const duration = Math.random() * 10 + 15; // Duração entre 15 e 25s
    const opacity = Math.random() * 0.3 + 0.1; // Opacidade entre 0.1 e 0.4
    
    return { id: index, left, size, delay, duration, opacity };
  });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    })
  };

  const features = [
    { 
      id: 1, 
      icon: <FaShieldAlt />, 
      text: 'Garantia de Serviço'
    },
    { 
      id: 2, 
      icon: <FaRegClock />, 
      text: 'Atendimento Rápido'
    },
    { 
      id: 3, 
      icon: <FaSnowflake />, 
      text: 'Melhores Equipamentos'
    }
  ];

  // Componente para um único floco de gelo
  const IceParticle = ({ left, size, delay, duration, opacity }) => {
    return (
      <motion.div
        className="absolute pointer-events-none"
        style={{ 
          left: `${left}%`,
          top: -size,
          opacity: opacity,
        }}
        animate={{
          y: ["0vh", "100vh"],
          rotate: [0, 360],
          x: [0, size * (Math.random() > 0.5 ? 1 : -1) * 3]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "linear",
          times: [0, 1],
          repeatType: "loop"
        }}
      >
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12,0L7.33,4.67L12,9.33L16.67,4.67L12,0z M4.67,7.33L0,12L4.67,16.67L9.33,12L4.67,7.33z M19.33,7.33L14.67,12L19.33,16.67L24,12L19.33,7.33z M12,14.67L7.33,19.33L12,24L16.67,19.33L12,14.67z" 
            fill="currentColor"
            fillOpacity="0.8"
          />
        </svg>
      </motion.div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-darkBlue via-primary to-blue-400 pt-10 pb-24 lg:min-h-[85vh] flex flex-col justify-center">
      {/* Elementos decorativos de fundo */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Padrão de grid no fundo */}
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        </div>
      </div>

      {/* Animação de gelo caindo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {iceParticles.map((particle) => (
          <IceParticle 
            key={particle.id}
            left={particle.left}
            size={particle.size}
            delay={particle.delay}
            duration={particle.duration}
            opacity={particle.opacity}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <motion.div 
            className="text-center lg:text-left lg:pr-8"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUpVariants}
          >
            <div className="lg:hidden flex justify-center mb-8">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-white p-1 shadow-lg">
                <img 
                  src={logoImage} 
                  alt="C&A Refrigeração Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              C&A <span className="text-white/90">Refrigeração</span>
            </h1>
            
            <motion.h2 
              className="text-white/90 text-xl md:text-2xl font-medium mb-6 max-w-xl mx-auto lg:mx-0"
              custom={1}
              variants={fadeInUpVariants}
            >
              Soluções completas em refrigeração com profissionais qualificados e atendimento personalizado
            </motion.h2>
            
            <motion.p 
              className="text-white/80 mb-8 max-w-lg mx-auto lg:mx-0"
              custom={2}
              variants={fadeInUpVariants}
            >
              Somos especializados em serviços de instalação, manutenção e higienização de ar-condicionado para residências e empresas, garantindo conforto térmico e qualidade do ar.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              custom={3}
              variants={fadeInUpVariants}
            >
              <a 
                href="tel:+5517991945725" 
                className="btn-hero-primary flex items-center gap-2 px-8 py-4 bg-white text-primary font-medium rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaPhoneAlt className="text-sm" />
                <span>Solicitar Orçamento</span>
              </a>
              
              <a 
                href="https://wa.me/5517991945725?text=Olá,%20gostaria%20de%20um%20orçamento" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero-secondary flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Direto</span>
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
              custom={4}
              variants={fadeInUpVariants}
            >
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="flex items-center gap-2 text-white/90"
                >
                  <div className="flex-shrink-0 text-white bg-white/10 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Área de imagem */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Círculo decorativo grande */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-md -m-6"></div>
              
              {/* Decoração com círculos flutuantes */}
              <motion.div 
                className="absolute -right-4 -top-4 w-12 h-12 bg-blue-400 rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -left-6 bottom-1/3 w-8 h-8 bg-primary/30 backdrop-blur-sm rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />
              
              <motion.div 
                className="absolute right-1/4 -bottom-4 w-10 h-10 bg-darkBlue/40 backdrop-blur-sm rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Logo central */}
              <div className="relative w-64 h-64 rounded-full bg-white p-3 shadow-2xl overflow-hidden z-10">
                <img 
                  src={logoImage} 
                  alt="C&A Refrigeração Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Brilho decorativo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-full"></div>
              </div>
              
              {/* Efeito de ondas em torno do logo */}
              <motion.div 
                className="absolute inset-0 -m-4 border-4 border-white/20 rounded-full"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute inset-0 -m-8 border-4 border-white/10 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Onda decorativa na parte inferior */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-[60px] text-white/0" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73,13.72,147.42,35.89,221.94,40.91,250.26,43.2,278.82,45.71,321.39,56.44Z"
              className="fill-current"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 