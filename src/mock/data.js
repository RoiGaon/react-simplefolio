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
  img: 'profile.jpg',
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
    img: 'project.jpg',
    title: 'Ecommerce-Nextjs',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/RoiGaon/ecommerce-nextjs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Memories-MERN',
    info: '',
    info2: '',
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
    img: 'project.jpg',
    title: 'Nextjs-Blog',
    info: '',
    info2: '',
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
