import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Roi's Portfolio", // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Roi',
  subtitle: "I'm a Full-Stack Developer",
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'portfolio-image-new.jpeg',
  paragraphOne:
    'Full Stack Developer with experience from multiple courses in developing, implementing applications and solutions using latest industry adopted technologies and frameworks.',
  paragraphTwo:
    'Looking for my next challenge not only to apply my knowledge but to learn, grow and be a team player.',
  paragraphThree: '',
  resume:
    'https://www.canva.com/design/DAEqol2lDzM/mR0U1-XOFkTPUDyapZeLPQ/view?utm_content=DAEqol2lDzM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ecommerce.png',
    title: 'Ecommerce-Nextjs',
    info: 'Ecommerce project built with Shopify and Nextjs using TypeScript and Graphql. Also used Cookies to create a unique checkout for every purchase. In the UI I used Tailwind for all the styling and animations.',
    info2:
      'In this project I built demo online shop store that you can interact with such as choosing clothes, size and color on every variant.',
    url: '',
    repo: 'https://github.com/RoiGaon/ecommerce-nextjs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'memories.png',
    title: 'Memories-MERN',
    info: 'Memories project built with React in the client side and mongoDB in server side. Also built an authentication and authorization using jwt. In the UI I used materialUI for all the styling.',
    info2:
      'This is the project I enjoyed the most to build, it is all about having fun and upload your memories so you can share them with everyone online.',
    url: 'https://memories-mern-react-app.netlify.app',
    repo: 'https://github.com/RoiGaon/Memories', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Crtpyo-Currency',
    info: '',
    info2: '',
    url: 'https://crtpyo-currency-app.netlify.app',
    repo: 'https://github.com/RoiGaon/CryptoVerse', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'blog.png',
    title: 'Blog-Nextjs',
    info: 'Blog project built with NextJs using MarkDown(MD) language to make a static site as a blog. Also used mongoDB to store contact informations.',
    info2:
      'This project was initialy a private project for myself to store all the new subjects I learned about and transform all the information I learned into a blog where I post about all this new subjects.',
    url: 'https://nextjs-blog-phi-ecru.vercel.app',
    repo: 'https://github.com/RoiGaon/nextjs-blog', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  phone: '+972 52-667-2464',
  btn: '',
  email: 'roigaon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/gaon_roi?t=IoqzQijtXzOEZ5PvxPyDJA&s=08',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '//www.linkedin.com/in/roi-gaon-bba691217/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RoiGaon',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
