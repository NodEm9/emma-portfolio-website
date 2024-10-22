import myflixAngular from '../assets/images/myflix-angular.png'
import myflixReact from '../assets/images/myflixapp.jpg'
import poke from '../assets/images/poke.png'
import meet from '../assets/images/meet-app.png'
import ecopicture from '../assets/images/ecopicture.png'
import portfoliowebsite from '../assets/images/emma-portfolio-website-img.webp'
import chatapp from '../assets/videos/chat-app.gif'
import docu from '../assets/images/docu.png'


const cardData = [
  {
    title: 'myFlix-Angular-Client',
    img: myflixAngular,
    text: 'Angular SPA built using Angular CLI, Angular Material and Angular Flex Layout. The app is a movie database that allows users to sign up, log in, view movie details, and save favorite movies.',
    demoUrl: 'https://nodem9.github.io/myFlix-angular-clients',
    codeUrl: 'https://github.com/NodEm9/myFlix-angular-clients'
  },
  {
    title: 'Chat App',
    video: chatapp,
    text: 'Chat App built with React Native, Expo, Firebase and Gifted Chat. The app allows users to choose a custom background for the chat screen and send images and videos from the phone storage.',
    demoUrl: 'https://github.com/NodEm9/chat-app',
    codeUrl: 'https://github.com/NodEm9/chat-app'
  },
  {
    title: 'Meet App',
    img: meet,
    text: 'React SPA built using TDD and BDD approaches. Jest, Ghekins, Puppeteer and Jest-Cucumber used for tesing. AWS and Google Calendar API, Atatus is used to experiment app performance monitoring.',
    demoUrl: 'https://nodem9.github.io/meet/',
    codeUrl: 'https://github.com/NodEm9/mee'
  },
  {
    title: 'myFlix React App',
    img: myflixReact,
    text: 'SPA built using React, Nodejs, Express and MongoDB. The app is a movie database that allows users to sign up, log in, view movie details, and save favorite movies.',
    demoUrl: 'https://myflix-movieoasis.netlify.app/login',
    codeUrl: 'https://github.com/NodEm9/myFlix-client'
  },
  {
    title: 'myFlix API',
    img: docu,
    text: 'API built using Nodejs, Express and MongoDB. The API is used to store and manage user data, movie data, and user favorites.',
    demoUrl: 'https://myflix-app-led6.onrender.com/documentation.html',
    codeUrl: 'https://github.com/NodEm9/myFlix-app'
  },
  {
    title: 'Pokédex App',
    img: poke,
    text: 'Pokédex app built HTML, CSS, JQuery and Bootstrap. The app fetches pokémon data from PokéAPI.',
    demoUrl: 'https://nodem9.github.io/pokemonapp/',
    codeUrl: 'https://github.com/NodEm9/pokemonapp'
  },
  {
    title: 'Portfolio Website',
    img: portfoliowebsite,
    text: 'Simple portfolio website, built using HTML and CSS templates.',
    demoUrl: 'https://nodem9.github.io/portfolio-website/',
    codeUrl: 'https://github.com/NodEm9/portfolio-website'
  },
  {
    title: 'Ecommerce Website',
    img: ecopicture,
    text: 'A Fullstack Ecommerce website built with Next.js, Sanity, Tailwind, ShadcnUI and Stripe.',
    demoUrl: 'https://ecommerce-rust-two.vercel.app/',
    codeUrl: 'https://github.com/NodEm9/ecommerce'
  }
]

export default cardData