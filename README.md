# Cartão Digital - C&A Refrigeração

Um cartão digital avançado para a empresa C&A Refrigeração, desenvolvido com React, Vite e Tailwind CSS.

<p align="center">
  <img src="public/og-image.jpg" alt="C&A Refrigeração" width="400">
</p>

## Características Premium

- Design moderno, responsivo e profissional
- Modo claro/escuro automático com detecção de preferências do sistema
- Animações avançadas para melhor engajamento do usuário
- Tela de carregamento com transições suaves
- Galeria de serviços com carrossel Swiper de efeito coverflow
- Formulário de contato inteligente com validação avançada
- Contadores animados para destacar conquistas
- Depoimentos de clientes formatados de forma atrativa
- Seção de FAQ interativa com animações
- Botões de contato direto para WhatsApp, Email e Instagram
- Botão de voltar ao topo
- Interface adaptativa para todas as dimensões de tela
- Otimizado para SEO e compartilhamento em redes sociais

## Tecnologias Avançadas Utilizadas

- React 19
- Vite
- Tailwind CSS
- Framer Motion para animações de alta qualidade
- React Icons para ícones vetoriais
- Swiper para carrosséis avançados
- React Hook Form + Yup para validação de formulários
- React CountUp para contadores animados
- React Intersection Observer para animações ativadas por scroll
- Lottie para animações vetoriais complexas
- AOS (Animation On Scroll) para efeitos ao rolar a página
- React Toastify para notificações elegantes
- LazyLoadImage para carregamento otimizado de imagens

## Como Instalar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cearefrigeracao.git

# Entre no diretório
cd cearefrigeracao

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

## Como Usar

Após iniciar o servidor de desenvolvimento, acesse `http://localhost:5173` no seu navegador para ver o cartão digital.

## Personalização

- Edite os links de contato no arquivo `src/components/ContactButtons.jsx`
- Modifique as cores do tema no arquivo `tailwind.config.js`
- Adicione ou remova serviços no arquivo `src/components/Services.jsx`
- Atualize os depoimentos em `src/components/Testimonials.jsx`
- Personalize as perguntas frequentes em `src/components/FAQ.jsx`
- Substitua as imagens placeholder na galeria em `src/components/ServiceGallery.jsx`
- Ajuste os contadores em `src/components/Stats.jsx`
- Personalize a fonte substituindo 'Inter' no arquivo `tailwind.config.js`
- Substitua a animação Lottie em `src/components/LoadingScreen.jsx`

## Performance e SEO

- Otimizado para Lighthouse com alta pontuação em Performance, Acessibilidade, Melhores Práticas e SEO
- Carregamento de imagens otimizado com lazy loading
- Meta tags completas para melhor indexação e compartilhamento
- Fontes pré-carregadas para melhor desempenho
- Suporte a PWA (Progressive Web App) para instalação no dispositivo

## Criando Build para Produção

```bash
npm run build
```

O resultado da build estará disponível na pasta `dist`.

## Melhorias Recentes

### Experiência do Usuário
- **Tela de Carregamento**: Splash screen animada com Lottie
- **Animações Scroll-Driven**: Elementos animados conforme o usuário rola a página
- **Contadores Animados**: Estatísticas exibidas com animação de contagem
- **Carrossel Avançado**: Galeria com efeito coverflow e controles intuitivos
- **Formulário Inteligente**: Validação em tempo real e feedback visual
- **Notificações Elegantes**: Toasts informativos para feedbacks de ação
- **Tema Adaptativo**: Detecção automática do tema preferido do usuário
- **Botão de Rolagem**: Volta ao topo da página de forma suave

### Visuais e Animações
- **Micro-interações**: Feedback visual em botões e componentes interativos
- **Efeitos parallax**: Camadas de conteúdo com velocidades diferentes ao rolar
- **Transições entre seções**: Movimento fluido entre os diferentes componentes
- **Animações baseadas em física**: Movimentos realistas usando propriedades físicas

### Otimizações Técnicas
- **Lazy loading**: Carregamento otimizado de componentes e imagens
- **Melhorias de acessibilidade**: ARIA labels e suporte a navegação por teclado
- **SEO aprimorado**: Meta tags completas para melhor indexação
- **Compatibilidade com PWA**: Possibilidade de instalação como aplicativo

## Licença

Este projeto está sob a licença MIT.
