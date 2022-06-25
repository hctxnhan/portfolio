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
    link: '',
    image: 'https://i.ytimg.com/vi/27JtRAI3QO8/maxresdefault.jpg',
  },
  {
    name: 'Crwn Clothing',
    description:
      'A clone of the e-commerce website Crwn. It is a ReactJS website.',
    technologies: [
      'ReactJS',
      'Typescript',
      'Styled-Components',
      'Redux',
      'Firebase',
      'Redux-Saga',
    ],
    link: '',
    image: 'https://i.ytimg.com/vi/27JtRAI3QO8/maxresdefault.jpg',
  },
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
    link: '',
    image:
      'https://camo.githubusercontent.com/cc90d480f6800e512bfba7a7e1cb203eda57d67c0fb4644660b11bd158d9d2e1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f54683357616c6c2f6173736574732d63646e2f4352574e436c6f7468696e672f43726f776e436c6f7468696e675f726561646d652e706e67',
  },
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
    link: '',
    image: 'https://i.ytimg.com/vi/27JtRAI3QO8/maxresdefault.jpg',
  },
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
    link: '',
    image: 'https://i.ytimg.com/vi/27JtRAI3QO8/maxresdefault.jpg',
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
