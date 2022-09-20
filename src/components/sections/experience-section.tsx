import { FaAws, FaDocker, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { Section, ExperienceCard, Hero } from '@components/common';
import { SiNextdotjs } from 'react-icons/si';

import type { HomePageHeroSectionsType } from './shared.types';
import type { ExperienceCardProps } from '@components/common';

const experienceData: ExperienceCardProps[] = [
    {
        title: 'Urban Emu',
        role: 'Web Developer',
        dates: 'May 2021 - Present',
        logoImagePath: '/experience-images/UE_Logo.png',
        icons: [FaReact, FaPhp, FaAws, FaDocker, SiNextdotjs],
        responsibilities: [
            'Created applications with Nextjs, Wordpress, and React Native',
            'Developed and maintained analytic dashboards for clients',
            'Helped maintain several U.S Government websites',
            'Worked on a team with other engineers',
            'Created CI/CD pipelines',
            'Agile development',
        ],
    },
    {
        title: 'Heritage House S.I.R',
        dates: 'April 2020 - May 2021',
        role: 'Sales Associate',
        logoImagePath: '/experience-images/sir-logo.jpeg',
        icons: [FaReact, FaPython, SiNextdotjs],
        responsibilities: [
            'Built custom sites for clients',
            'Lead and facilitated the negotiations process',
            'Managed timelines with clients and vendors',
            'Analyzed Market data and developed reports',
            'Created automated scripts to gather data',
        ],
    },
    {
        title: 'Revamp Wraps',
        dates: 'June 2016 - April 2020',
        role: 'Vice President',
        logoImagePath: '/experience-images/revamp-wraps-logo.jpeg',
        icons: [FaReact, FaPython],
        responsibilities: ['Google Analytics'],
    },
];

export const Experience = (props: HomePageHeroSectionsType) => {
    const { id } = props;

    return (
        <Hero
            id={id}
            variant="dark"
            sectionTitle="Experience"
            maxWidth={false}
            padding="primary-x"
        >
            <Section className="h-stack h-[70vh] w-full overflow-x-scroll scroll mx-auto space-x-5 pb-6 snap-x snap-mandatory scrollbar-thumb-[#67949e] scrollbar-thin max-w-6xl">
                {experienceData.map((i, index) => (
                    <ExperienceCard
                        key={index}
                        {...i}
                    />
                ))}
            </Section>
        </Hero>
    );
};
