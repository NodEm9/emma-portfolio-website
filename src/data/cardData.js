import myflixAngular from '../assets/images/myflix-angular.png'
import myflixReact from '../assets/images/myflixapp.jpg'
import poke from '../assets/images/poke.png'
import meet from '../assets/images/meet-app.png'
import ecopicture from '../assets/images/ecopicture.png'
import portfoliowebsite from '../assets/images/emma-portfolio-website-img.webp'
import todo from '../assets/images/todoapp.png'
import chatapp from '../assets/videos/chat-app.gif'
import docu from '../assets/images/docu.png'


const cardData = [
  {
    title: 'myFlix-Angular-Client',
    img: myflixAngular,
    text: 'Angular SPA built using Angular CLI, Angular Material and Angular Flex Layout. The app is a movie database that allows users to sign up, log in, view movie details, and save favorite movies.',
    appLink: 'https://nodem9.github.io/myFlix-angular-clients',
    codeLink: 'https://github.com/NodEm9/myFlix-angular-clients'
  },
  {
    title: 'Chat App',
    video: chatapp,
    text: 'Chat App built with React Native, Expo, Firebase and Gifted Chat. The app allows users to choose a custom background for the chat screen and send images and videos from the phone storage.',
    appLink: 'https://github.com/NodEm9/chat-app',
    codeLink: 'https://github.com/NodEm9/chat-app'
  },
  {
    title: 'Meet App',
    img: meet,
    text: 'React SPA built using TDD and BDD approaches. Jest, Ghekins, Puppeteer and Jest-Cucumber used for tesing. AWS and Google Calendar API, Atatus is used to experiment app performance monitoring. This app allows users to search for upcoming events in their city.',
    appLink: 'https://nodem9.github.io/meet/',
    codeLink: 'https://github.com/NodEm9/mee'
  },
  {
    title: 'myFlix React App',
    img: myflixReact,
    text: 'SPA built using React, Nodejs, Express and MongoDB. The app is a movie database that allows users to sign up, log in, view movie details, and save favorite movies.',
    appLink: 'https://myflix-movieoasis.netlify.app/login',
    codeLink: 'https://github.com/NodEm9/myFlix-client'
  },
  {
    title: 'myFlix API',
    img: docu,
    text: 'API built using Nodejs, Express and MongoDB. The API is used to store and manage user data, movie data, and user favorites.',
    appLink: 'https://myflix-app-led6.onrender.com/documentation.html',
    codeLink: 'https://github.com/NodEm9/myFlix-app'
  },
  {
    title: 'Pokédex App',
    img: poke,
    text: 'Pokédex app built HTML, CSS, JQuery and Bootstrap. The app fetches pokémon data from PokéAPI.',
    appLink: 'https://nodem9.github.io/pokemonapp/',
    codeLink: 'https://github.com/NodEm9/pokemonapp'
  },
  {
    title: 'Simple Todo App',
    img: todo,
    text: 'The responsive Todo app built with HTML, CSS, and JQuery.',
    appLink: 'https://nodem9.github.io/to-do-list-app/index.html',
    codeLink: 'https://github.com/NodEm9/to-do-list-app'
  },
  {
    title: 'Portfolio Website',
    img: portfoliowebsite,
    text: 'Simple portfolio website, built using HTML and CSS templates.',
    appLink: 'https://nodem9.github.io/portfolio-website/',
    codeLink: 'https://github.com/NodEm9/portfolio-website'
  },
  {
    title: 'Ecommerce Website',
    img: ecopicture,
    text: 'A Fullstack Ecommerce website built with Next.js, Sanity, Tailwind, ShadcnUI and Stripe.',
    appLink: 'https://ecommerce-rust-two.vercel.app/',
    codeLink: 'https://github.com/NodEm9/ecommerce'
  }
]

export default cardData