import { Section } from '@components/common';
import { ExperienceCard, Hero } from '@components/sections';
import type { ExperienceCardProps } from '@components/sections';
import { FaAws, FaDocker, FaPhp, FaReact } from 'react-icons/fa';
import type { HomePageContainersType } from './shared.types';

const experienceData: ExperienceCardProps[] = [
    {
        title: 'Urban Emu',
        role: 'Web Developer',
        dates: 'May 2021 - Present',
        logoImagePath: '/experience-images/UE_Logo.png',
        icons: [FaReact, FaPhp, FaAws, FaDocker],
        responsibilities: ['Google Analytics'],
    },
    {
        title: 'Heritage House',
        dates: 'April 2020 - May 2021',
        role: 'Sales Associate',
        logoImagePath: '/experience-images/UE_Logo.png',
        icons: [FaReact, FaPhp, FaAws, FaDocker],
        responsibilities: ['Google Analytics'],
    },
];

export const Experience = (props: HomePageContainersType) => {
    const { id } = props;

    return (
        <Hero
            id={id}
            variant="dark"
            sectionTitle="Experience"
            maxWidth={false}
        >
            <Section className="h-stack h-full w-full overflow-x-scroll mx-auto space-x-5 px-10 snap-x snap-mandatory">
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
