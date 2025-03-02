import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaTools, FaBuilding, FaAward } from 'react-icons/fa';

const statsData = [
  {
    id: 1,
    icon: <FaUser className="w-6 h-6" />,
    value: 1250,
    label: 'Clientes Satisfeitos',
    suffix: '+'
  },
  {
    id: 2,
    icon: <FaTools className="w-6 h-6" />,
    value: 3800,
    label: 'Serviços Realizados',
    suffix: '+'
  },
  {
    id: 3,
    icon: <FaBuilding className="w-6 h-6" />,
    value: 150,
    label: 'Empresas Atendidas',
    suffix: '+'
  },
  {
    id: 4,
    icon: <FaAward className="w-6 h-6" />,
    value: 10,
    label: 'Anos de Experiência',
    suffix: ''
  }
];

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-gradient-to-r from-darkBlue to-primary dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <motion.h2
          className="text-3xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nossa Trajetória em Números
        </motion.h2>

        <div 
          ref={ref} 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto text-white">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    separator="," 
                    suffix={stat.suffix} 
                    useEasing={true}
                  />
                ) : (
                  <span>0</span>
                )}
              </h3>
              <p className="text-sm md:text-base text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 