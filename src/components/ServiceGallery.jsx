import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Normalmente aqui teríamos imagens reais, mas estamos usando placeholders
const serviceImages = [
  {
    id: 1,
    url: 'https://placehold.co/600x400/4A68D8/FFFFFF?text=Instalação+Residencial',
    title: 'Instalação Residencial',
    description: 'Instalação de ar-condicionado em residência com garantia e qualidade'
  },
  {
    id: 2,
    url: 'https://placehold.co/600x400/4A68D8/FFFFFF?text=Manutenção+Comercial',
    title: 'Manutenção Comercial',
    description: 'Manutenção preventiva em equipamento comercial para maior durabilidade'
  },
  {
    id: 3,
    url: 'https://placehold.co/600x400/4A68D8/FFFFFF?text=Higienização',
    title: 'Higienização',
    description: 'Serviço completo de higienização para um ar mais limpo e saudável'
  },
  {
    id: 4,
    url: 'https://placehold.co/600x400/4A68D8/FFFFFF?text=Instalação+Comercial',
    title: 'Instalação Comercial',
    description: 'Soluções profissionais para estabelecimentos comerciais de todos os portes'
  },
  {
    id: 5,
    url: 'https://placehold.co/600x400/4A68D8/FFFFFF?text=Projetos+Especiais',
    title: 'Projetos Especiais',
    description: 'Desenvolvimento de projetos personalizados para necessidades específicas'
  }
];

const ServiceGallery = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900" id="galeria">
      <div className="container mx-auto" data-aos="fade-up">
        <motion.h2
          className="text-3xl font-bold text-primary dark:text-primary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nossos Trabalhos
        </motion.h2>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full max-w-4xl mt-4"
        >
          {serviceImages.map((image) => (
            <SwiperSlide key={image.id} className="max-w-lg">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <LazyLoadImage
                  src={image.url}
                  alt={image.title}
                  effect="blur"
                  className="w-full h-64 object-cover"
                  wrapperClassName="w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{image.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{image.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a 
            href="#contato" 
            className="inline-block px-8 py-3 bg-primary hover:bg-darkBlue text-white font-medium rounded-lg transition-colors duration-300"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery; 