import { useEffect, useState } from 'react'
import Services from './components/Services'
import ContactButtons from './components/ContactButtons'
import ServiceGallery from './components/ServiceGallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import LoadingScreen from './components/LoadingScreen'
import AnimationProvider from './components/AnimationProvider'
import Hero from './components/Hero'
import { FaArrowUp } from 'react-icons/fa'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Verificar se deve mostrar o botão de rolagem para o topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimationProvider>
      <div className="min-h-screen flex flex-col">
        <LoadingScreen />
        
        {/* Botão de voltar ao topo */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-primary hover:bg-darkBlue text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Voltar ao topo"
          >
            <FaArrowUp />
          </button>
        )}

        {/* Cabeçalho com o novo Hero */}
        <Hero />

        {/* Conteúdo principal */}
        <main className="flex flex-col">
          <Services />
          <ServiceGallery />
          <Testimonials />
          <ContactForm />
          <FAQ />
          <ContactButtons />
        </main>

        {/* Rodapé com informações de copyright */}
        <footer className="bg-white py-6 text-center text-sm text-gray-500">
          <div className="container mx-auto px-4">
            <p className="mb-2">© {new Date().getFullYear()} C&A Refrigeração. Todos os direitos reservados.</p>
            <p className="text-xs mb-1">
              Desenvolvido com ❤️ por <a href="https://wa.me/5517999754390" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DGSolutionWEB</a>
            </p>
          </div>
        </footer>
      </div>
    </AnimationProvider>
  )
}

export default App
