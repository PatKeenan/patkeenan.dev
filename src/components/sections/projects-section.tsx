import { Div, Section, Hero, ProjectCard, Slider } from '@components/common';

import type { HomePageHeroSectionsType } from './shared.types';

export const Projects = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    return (
        <Hero
            id={id}
            variant="light"
            sectionTitle="Projects"
        >
            <Slider
                snap
                className="h-[70vh] pb-6 space-x-5"
                scrollThumbColor="primary"
            >
                <p>Hello</p>
            </Slider>
        </Hero>
    );
};
