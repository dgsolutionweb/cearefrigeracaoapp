import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqItems = [
  {
    id: 1,
    question: 'Qual é o tempo médio para instalação de um ar-condicionado?',
    answer: 'O tempo de instalação varia de acordo com o tipo e modelo, mas geralmente leva entre 2 a 4 horas para modelos split convencionais residenciais.'
  },
  {
    id: 2,
    question: 'Com que frequência devo fazer a manutenção do meu ar-condicionado?',
    answer: 'Recomendamos manutenção preventiva a cada 3 meses para limpeza dos filtros e a cada 6 meses para uma revisão completa, garantindo melhor eficiência e durabilidade do equipamento.'
  },
  {
    id: 3,
    question: 'Vocês atendem em finais de semana?',
    answer: 'Sim, oferecemos atendimento nos finais de semana mediante agendamento prévio, e também possuímos serviço de emergência 24 horas.'
  },
  {
    id: 4,
    question: 'Quais regiões vocês atendem?',
    answer: 'Atendemos toda a região metropolitana e cidades num raio de até 100km. Para localidades mais distantes, fazemos uma avaliação caso a caso.'
  },
  {
    id: 5,
    question: 'Vocês emitem nota fiscal?',
    answer: 'Sim, emitimos nota fiscal para todos os serviços realizados, garantindo a formalidade e a garantia do seu serviço.'
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (id) => {
    setOpenItems((prev) => 
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-white py-12 px-4">
      <motion.h3
        className="text-center text-primary text-2xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Perguntas Frequentes
      </motion.h3>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((item) => (
          <motion.div
            key={item.id}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-all duration-200"
              onClick={() => toggleItem(item.id)}
            >
              <span className="font-medium">{item.question}</span>
              <motion.div
                animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-primary" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openItems.includes(item.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 