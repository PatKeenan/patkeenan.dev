import { Hero, ProjectCard } from '@components/common';
import { useStore } from '@store';
import { useIsInViewport } from 'hooks/useIsInViewport';
import * as React from 'react';

import type { HomePageHeroSectionsType } from './shared.types';

export const Projects = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    const sectionRef2 = React.useRef<HTMLDivElement | null>(null);
    const isInViewport = useIsInViewport(sectionRef2);
    const { setActiveSection } = useStore();

    React.useEffect(() => {
        if (isInViewport) {
            setActiveSection('Projects');
        }
    }, [isInViewport, setActiveSection]);
    return (
        <Hero
            id={id}
            variant="light"
            sectionTitle="Projects"
            maxWidth={false}
            className="px-0 border border-x-0 border-y-1"
            centeredContent={false}
        >
            <div ref={sectionRef2}>
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
            </div>
        </Hero>
    );
};
