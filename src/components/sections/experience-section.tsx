import { ExperienceCard, Hero, Slider } from '@components/common';
import { useIsInViewport } from '@hooks';
import { useStore } from '@store';
import { experienceData } from 'section-data';
import * as React from 'react';
import type { HomePageHeroSectionsType } from './shared.types';

export const Experience = (props: HomePageHeroSectionsType) => {
    const { id } = props;

    const sectionRef = React.useRef<HTMLDivElement | null>(null);
    const isInViewport = useIsInViewport(sectionRef);
    const { setActiveSection } = useStore();

    React.useEffect(() => {
        if (isInViewport) {
            setActiveSection('Experience');
        }
    }, [isInViewport, setActiveSection]);

    return (
        <Hero
            id={id}
            variant="dark"
            sectionTitle="Experience"
            maxWidth={false}
            padding="primary-x"
        >
            <div ref={sectionRef}>
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
            </div>
        </Hero>
    );
};
