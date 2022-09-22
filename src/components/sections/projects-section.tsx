import { Hero, ProjectCard, Footer, Button, Slider } from '@components/common';
import * as React from 'react';

import type { HomePageHeroSectionsType } from './shared.types';

export const Projects = (props: HomePageHeroSectionsType) => {
    const { id } = props;

    return (
        <Hero
            id={id}
            variant="light"
            sectionTitle="Projects"
            maxWidth={false}
            className="px-0 border border-x-0 border-y-1"
            centeredContent={false}
        >
            <div className="v-stack space-y-2 mt-4">
                <ProjectCard
                    title="Real Estate App"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae eum dolorem. Voluptate praesentium quisquam, quod omnis illo ab cum, minima ipsam possimus error vero dolore tempora dolor qui rem!"
                    imagePath="/project-images/placeholder.png"
                    href="#"
                />
                <ProjectCard
                    reverse
                    title="Real Estate App"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae eum dolorem. Voluptate praesentium quisquam, quod omnis illo ab cum, minima ipsam possimus error vero dolore tempora dolor qui rem!"
                    imagePath="/project-images/placeholder.png"
                    href="#"
                />
                <ProjectCard
                    title="Real Estate App"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur vitae eum dolorem. Voluptate praesentium quisquam, quod omnis illo ab cum, minima ipsam possimus error vero dolore tempora dolor qui rem!"
                    imagePath="/project-images/placeholder.png"
                    href="#"
                />
            </div>
            <Footer>
                <Button>View More</Button>
            </Footer>
        </Hero>
    );
};
