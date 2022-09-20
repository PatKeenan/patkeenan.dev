import { Div, Section, Hero, ProjectCard } from '@components/common';

import type { HomePageHeroSectionsType } from './shared.types';

export const Projects = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    return (
        <Hero
            id={id}
            variant="light"
            sectionTitle="Projects"
        >
            <Section className="snap-x snap-mandatory w-full overflow-auto h-stack space-x-48">
                <Div className="grid place-items-center w-full h-full snap-center flex-shrink-0">
                    <ProjectCard
                        variant="dark"
                        title="Blog"
                        path="blog"
                        description="Blog with an emphasis on reusable theme components"
                    />
                </Div>

                <Div className="grid place-items-center w-full h-full snap-center flex-shrink-0">
                    <ProjectCard
                        title="Blog 2"
                        path="blog"
                        description="Blog 2 with an emphasis on reusable theme components"
                    />
                </Div>
            </Section>
        </Hero>
    );
};
