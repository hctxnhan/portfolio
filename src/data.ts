import nexter from './img/nexter.png';
import trillo from './img/trillo.png';
import natours from './img/natours.png';
import porfolio from './img/portfolio.png';
import gitbattle from './img/github-battle.png';
import player from './img/react-player.png';

export type TimelineItemType = {
  id: number;
  date: string;
  description: string;
  heading: string;
};

export type SkillItemType = {
  name: string;
  progress: number;
};

export type WorkItemType = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

export const works: WorkItemType[] = [
  {
    name: 'Portfolio',
    description:
      'A portfolio website for my self-introduction and portfolio. It is a ReactJS website.',
    technologies: [
      'ReactJS',
      'Typescript',
      'Styled-Components',
      'Framer Motion',
    ],
    link: 'https://github.com/hctxnhan/portfolio',
    image: porfolio,
  },
  {
    name: 'React Player',
    description:
      'A simplified music player created with ReactJS. With modern UI.',
    technologies: [
      'ReactJS',
      'Redux',
      'Typescript',
      'Styled-Components',
      'Framer Motion',
    ],
    link: 'https://github.com/hctxnhan/reactplayer',
    image: player,
  },
  {
    name: 'Git Battle',
    description:
      'A website to compare 2 github repositories based on stars, forks, opens.',
    technologies: ['ReactJS', 'SCSS', 'JavaScript, HTML, CSS'],
    link: 'https://github.com/hctxnhan/gitbattle',
    image: gitbattle,
  },
  {
    name: 'Nexter',
    description:
      'A website belongs to a Advanced SASS course. Used CSS Grid and Flexbox and responsive design.',
    technologies: ['HTML', 'CSS', 'SCSS'],
    link: 'https://github.com/hctxnhan/nexter',
    image: nexter,
  },
  {
    name: 'Natours',
    description:
      'This website also belongs to a Advanced SASS course. Used CSS Grid and Flexbox and responsive design.',
    technologies: ['HTML', 'CSS', 'SCSS'],
    link: 'https://github.com/hctxnhan/natours',
    image: natours,
  },
  {
    name: 'Trillo',
    description:
      'A website belong to a the same course with the Nexter project. Used CSS Grid and Flexbox and responsive design.',
    technologies: ['HTML', 'CSS', 'SCSS'],
    link: 'https://github.com/hctxnhan/trillo',
    image: trillo,
  },
];

export const skills: SkillItemType[] = [
  {
    name: 'English',
    progress: 80,
  },
  {
    name: 'HTML',
    progress: 90,
  },
  {
    name: 'CSS',
    progress: 90,
  },
  {
    name: 'JavaScript',
    progress: 85,
  },
  {
    name: 'TypeScript',
    progress: 80,
  },
  {
    name: 'React',
    progress: 85,
  },
  {
    name: 'Redux',
    progress: 80,
  },
  {
    name: 'Styled Component',
    progress: 85,
  },
  {
    name: 'SASS',
    progress: 85,
  },
  {
    name: 'Firebase',
    progress: 65,
  },
  {
    name: 'Git',
    progress: 70,
  },
  {
    name: 'Framer Motion',
    progress: 70,
  },
];
export const timeline: TimelineItemType[] = [
  {
    id: 5,
    date: 'Jul 2022',
    description: ``,
    heading: 'Find a ReactJS front-end development intern position',
  },
  {
    id: 4,
    date: 'Mar-Jul 2022',
    description: '',
    heading: 'LEARNING REACTJS',
  },
  {
    id: 3,
    date: 'Oct 2021 - Mar 2022',
    description: '',
    heading: 'LEARNING HTML, CSS, JAVASCRIPT',
  },
  {
    id: 2,
    date: 'Oct 2021',
    description: '',
    heading: 'START A NEW JOURNEY TO BECOME A FRONT END WEB DEVELOPER',
  },
  {
    id: 1,
    date: 'Oct 2020',
    description: '',
    heading:
      'STARTED LEARNING AT HO CHI MINH UNIVERSITY OF TECHNOLOGY AND EDUCATION',
  },
];
