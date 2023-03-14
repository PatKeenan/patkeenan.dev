import { FaAws, FaDocker, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import {
    SiChakraui,
    SiCypress,
    SiGit,
    SiGraphql,
    SiMaterialui,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si';

import type { ExperienceCardProps } from '@components/common';

export const experienceData: ExperienceCardProps[] = [
    {
        title: 'Urban Emu',
        role: 'Web Developer',
        dates: 'May 2021 - Present',
        logoImagePath: '/experience-images/UE_Logo.png',
        icons: [FaReact, FaPhp, FaAws, FaDocker, SiNextdotjs],
        responsibilities: [
            'Develop and maintain  public-facing and internal applications for a variety of clients including the multiple government agencies',
            'Experience in turning client concepts into functional applications and leading demos to gather insights and feedback for the development team',
            'Build and maintain analytic dashboards to assist clients in gaining valuable insights for their web based applications',
            'Experience working with clients and internal teams using AGILE development practices',
            'Construct and monitor CI/CD pipelines using Docker, Github Actions, Cypress, and AWS'
        ],  
    },
    {
        title: 'Heritage House S.I.R',
        dates: 'May 2020 - Nov 2022',
        role: 'Sales Associate',
        logoImagePath: '/experience-images/sir-logo.jpeg',
        icons: [FaReact, FaPython, SiNextdotjs],
        responsibilities: [
            'Responsible for maintaining strong interpersonal relationships with current and prospective clients',
            'Scheduled and coordinated showing appointments with multiple clients',
            'Assisted in contract negotiations and closings',
            'Responsible for preparing offers and real estate documents for the home buying process',
           
        ],
    },
    {
        title: 'Revamp Wraps',
        dates: 'Sep 2017 - May 2020',
        role: 'Vice President',
        logoImagePath: '/experience-images/revamp-wraps-logo.jpeg',
        icons: [FaReact, FaPython],
        responsibilities: [
            'Coordinated work flow and managed projects from initial request to the end deliverable',
            'Responsible for being the point of contact for clients and vendors',
            'Created and maintained the sales pipeline for new and existing customers',
        ],
    },
];

export const skillsData = [
    { title: 'Nextjs', icon: SiNextdotjs, level: '85%' },
    { title: 'React', icon: FaReact, level: '80%' },
    { title: 'Typescript', icon: SiTypescript, level: '80%' },
    { title: 'Docker', icon: FaDocker, level: '70%' },
    { title: 'Prisma', icon: SiPrisma, level: '70%' },
    { title: 'Python', icon: FaPython, level: '60%' },
    { title: 'Cypress', icon: SiCypress, level: '40%' },
    { title: 'Stripe', icon: SiStripe, level: '35%' },
    { title: 'Aws', icon: FaAws, level: '40%' },
    { title: 'Graphql', icon: SiGraphql, level: '50%' },
    { title: 'Postgres', icon: SiPostgresql, level: '40%' },
    { title: 'Chakra-ui', icon: SiChakraui, level: '60%' },
    { title: 'Material-ui', icon: SiMaterialui, level: '60%' },
    { title: 'Tailwindcss', icon: SiTailwindcss, level: '85%' },
    { title: 'Git', icon: SiGit, level: '80%' },
];

export const projectsData = [
    {
        id: 1,
        title: 'Real Estate App',
        slug: 're-app',
        photo: '/project-images/re-app-desktop.png',
        shortDescription:
            'Software created for real estate agents. This application helps agents stay organized when creating and maintaining appointments for clients by providing a intuitive interface.',
        projectUrl: 'https://www.agentspace.io/',
        githubUrl: 'https://github.com/PatKeenan/AgentSpace',
    },
    {
        id: 2,
        title: 'Improv Blog',
        slug: 'improv-blog',
        photo: '/project-images/improv-app-desktop.png',
        shortDescription:
            'A blogging platform where users start with a plot and build a full story using a voting system. Users can submit blocks for each part of the story. The block with the most votes slides into that part of the story.',
        githubUrl: 'https://github.com/PatKeenan/improvBlog',
    },
    {
        id: 3,
        title: 'Portfolio Site',
        slug: 'portfolio-site',
        photo: '/project-images/portfolio-site.png',
        shortDescription:
            'A blogging platform where users start with a plot and build a full story using a voting system. Users can submit blocks for each part of the story. The block with the most votes slides into that part of the story.',
        githubUrl: 'https://github.com/PatKeenan/patkeenan.dev',
        projectUrl: 'https://pat-keenan.vercel.app/',
    },
];
