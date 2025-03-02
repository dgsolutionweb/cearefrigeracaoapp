import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    role: "Proprietário de Restaurante",
    text: "Excelente serviço! Resolveram meu problema de refrigeração rapidamente e com qualidade.",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Oliveira",
    role: "Gerente de Supermercado",
    text: "Profissionais pontuais e competentes. Recomendo para qualquer serviço de refrigeração.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Souza",
    role: "Residencial",
    text: "Ótimo atendimento e preço justo. Instalaram meu ar-condicionado em poucas horas.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <motion.h3
        className="text-center text-primary text-2xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        O que nossos clientes dizem
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex text-yellow-400 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 