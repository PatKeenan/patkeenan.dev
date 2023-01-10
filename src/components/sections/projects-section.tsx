import { Hero, ProjectCard } from '@components/common';
import { useStore } from '@store';
import { useIsInViewport } from 'hooks/useIsInViewport';
import * as React from 'react';
import { projectsData } from 'section-data';

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
            className="px-0 border border-x-0 border-y-1 pb-6"
            centeredContent={false}
        >
            <div ref={sectionRef2}>
                <div className="v-stack space-y-2 mt-4">
                    {projectsData.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            title={project.title}
                            description={project.shortDescription}
                            imagePath={project.photo}
                            href={`/projects/${project.slug}`}
                            reverse={idx % 2 !== 0 ? true : false}
                        />
                    ))}
                </div>
            </div>
        </Hero>
    );
};
