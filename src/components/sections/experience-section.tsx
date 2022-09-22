import { ExperienceCard, Hero, Slider } from '@components/common';
import { experienceData } from 'experience-data';

import type { HomePageHeroSectionsType } from './shared.types';

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
            <Slider
                snap
                className="h-full pb-6 space-x-5 mb-8 mt-4 w-full"
                scrollThumbColor="primary"
            >
                {experienceData.map((data, index) => (
                    <ExperienceCard
                        key={index}
                        {...data}
                    />
                ))}
            </Slider>
        </Hero>
    );
};
