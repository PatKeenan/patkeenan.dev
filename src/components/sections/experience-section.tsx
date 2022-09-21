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
                className="h-[95%] md:h-[70vh] pb-6 space-x-5"
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
