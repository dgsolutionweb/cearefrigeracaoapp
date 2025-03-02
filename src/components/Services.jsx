import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaSprayCan, 
  FaTools, 
  FaWrench, 
  FaSnowflake, 
  FaBuilding, 
  FaRegCheckCircle, 
  FaArrowRight 
} from 'react-icons/fa';

const serviceItems = [
  {
    id: 1,
    title: 'Higienização',
    description: 'Eliminação de ácaros, bactérias e fungos, proporcionando ar puro e ambiente mais saudável.',
    icon: <FaSprayCan className="w-full h-full" />,
    benefits: ['Ar mais puro', 'Elimina odores', 'Reduz alergias'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Instalação',
    description: 'Instalação profissional com garantia de serviço e materiais de primeira linha.',
    icon: <FaTools className="w-full h-full" />,
    benefits: ['Instalação rápida', 'Garantia de serviço', 'Equipe especializada'],
    color: 'from-primary to-indigo-500',
  },
  {
    id: 3,
    title: 'Manutenção Preventiva',
    description: 'Revisão completa do sistema para maior durabilidade e economia de energia.',
    icon: <FaWrench className="w-full h-full" />,
    benefits: ['Prolonga vida útil', 'Economia de energia', 'Evita reparos caros'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 4,
    title: 'Instalação Comercial',
    description: 'Soluções personalizadas para empresas, comércios e ambientes corporativos.',
    icon: <FaBuilding className="w-full h-full" />,
    benefits: ['Projetos sob medida', 'Alta capacidade', 'Manutenção inclusa'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 5,
    title: 'Equipamentos de Linha',
    description: 'Oferecemos as melhores marcas do mercado com garantia estendida e suporte técnico.',
    icon: <FaSnowflake className="w-full h-full" />,
    benefits: ['Marcas premium', 'Economia de energia', 'Tecnologia inverter'],
    color: 'from-emerald-500 to-teal-500',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/90 relative overflow-hidden" id="servicos">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-48 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.p 
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nossos Serviços
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluções Completas em Refrigeração
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Oferecemos serviços especializados com profissionais qualificados e equipamentos modernos, 
            garantindo conforto e eficiência para sua residência ou empresa.
          </motion.p>
        </div>
        
        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className={`h-1.5 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className="w-16 h-16 mb-6 p-3 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl text-primary flex items-center justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[60px]">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <FaRegCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href="#contato" 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    <span>Solicitar orçamento</span>
                    <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Card */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary to-darkBlue rounded-2xl p-8 md:p-12 text-white shadow-lg flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="md:flex-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Não encontrou o que procura?</h3>
            <p className="text-white/80 mb-6">
              Temos soluções personalizadas para cada necessidade. Entre em contato e converse com nossos especialistas.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-white text-primary font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Fale Conosco
            </a>
          </div>
          <div className="hidden md:block w-64 h-64 relative">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <FaSnowflake className="w-20 h-20 text-white/70 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 