import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimationProvider = ({ children }) => {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 100,
    });

    // Aplicar scroll suave para toda a página
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return children;
};

export default AnimationProvider; 