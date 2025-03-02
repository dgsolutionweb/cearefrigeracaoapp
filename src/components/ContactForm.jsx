import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaPhone, FaEnvelope, FaClipboardList, FaComment } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Schema de validação com Yup
const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter no mínimo 3 caracteres'),
  phone: yup.string()
    .required('Telefone é obrigatório')
    .matches(/^(\d{10,11})$/, 'Informe um telefone válido (10 ou 11 dígitos)'),
  email: yup.string().required('Email é obrigatório').email('Informe um email válido'),
  service: yup.string().required('Selecione um serviço'),
  message: yup.string().required('Mensagem é obrigatória').min(10, 'A mensagem deve ter no mínimo 10 caracteres')
});

// Mapeamento dos valores do select para textos mais amigáveis
const serviceOptions = {
  "installation": "Instalação",
  "maintenance": "Manutenção Preventiva",
  "cleaning": "Higienização",
  "repair": "Reparo",
  "commercial": "Projeto Comercial",
  "other": "Outro"
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    try {
      // Formatando a mensagem para o WhatsApp
      const serviceName = serviceOptions[data.service] || data.service;
      
      const message = `*Solicitação de Orçamento - C&A Refrigeração*
      
*Nome*: ${data.name}
*Telefone*: ${data.phone}
*Email*: ${data.email}
*Serviço*: ${serviceName}
*Mensagem*: ${data.message}`;

      // Codificando a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Número de WhatsApp (usando o mesmo do componente ContactButtons)
      const whatsappNumber = '5517991945725'; // Número atualizado
      
      // URL do WhatsApp com a mensagem
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Mostrando notificação de sucesso
      toast.success('Redirecionando para o WhatsApp...', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      
      // Pequeno delay antes de abrir o WhatsApp para a notificação ser visível
      setTimeout(() => {
        // Redirecionando para o WhatsApp
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        reset();
      }, 1500);
    } catch (error) {
      console.error('Erro ao enviar para o WhatsApp:', error);
      toast.error('Ocorreu um erro ao enviar. Por favor, tente novamente.', {
        position: "top-center",
        autoClose: 5000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800" id="contato">
      <ToastContainer />
      <div className="container mx-auto max-w-4xl" data-aos="fade-up">
        <motion.h2
          className="text-3xl font-bold text-primary dark:text-primary text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Solicite um Orçamento
        </motion.h2>
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Preencha o formulário abaixo para enviar sua solicitação diretamente para nosso WhatsApp e
          receber um atendimento personalizado.
        </p>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                  <FaUser className="mr-2 text-primary" />
                  Nome Completo
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                  <FaPhone className="mr-2 text-primary" />
                  Telefone
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition`}
                  placeholder="Apenas números (com DDD)"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                <FaEnvelope className="mr-2 text-primary" />
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition`}
                placeholder="Seu melhor email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                <FaClipboardList className="mr-2 text-primary" />
                Serviço
              </label>
              <select
                {...register('service')}
                className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition`}
              >
                <option value="">Selecione um serviço</option>
                <option value="installation">Instalação</option>
                <option value="maintenance">Manutenção Preventiva</option>
                <option value="cleaning">Higienização</option>
                <option value="repair">Reparo</option>
                <option value="commercial">Projeto Comercial</option>
                <option value="other">Outro</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 dark:text-gray-200 font-medium">
                <FaComment className="mr-2 text-primary" />
                Mensagem
              </label>
              <textarea
                {...register('message')}
                rows="4"
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition`}
                placeholder="Descreva sua necessidade em detalhes"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <div className="pt-4">
              <motion.button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Preparando WhatsApp...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <FaPaperPlane className="mr-2" />
                    Enviar para WhatsApp
                  </div>
                )}
              </motion.button>
            </div>
            
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              Ao enviar este formulário, você será redirecionado para o WhatsApp da empresa com todos os dados preenchidos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 