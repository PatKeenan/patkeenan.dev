import { Hero, SkillCard } from '@components/common';
import { useIsInViewport } from '@hooks';
import { skillsData } from 'section-data';
import { useStore } from '@store';
import * as React from 'react';

import type { HomePageHeroSectionsType } from './shared.types';

export const Skills = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    const sectionRef = React.useRef<HTMLDivElement | null>(null);

    const isInViewport = useIsInViewport(sectionRef);
    const { setActiveSection } = useStore();

    React.useEffect(() => {
        if (isInViewport) {
            setActiveSection('Skills');
        }
    }, [isInViewport, setActiveSection]);

    return (
        <Hero
            id={id}
            sectionTitle="Skills"
            variant="dark"
        >
            <div ref={sectionRef}>
                <div className="grid grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto gap-6 md:gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            level={skill.level}
                            animate={{
                                width: isInViewport ? skill.level : '0',
                            }}
                            transition={{
                                delay: Math.random() / 2,
                            }}
                        />
                    ))}
                </div>
            </div>
        </Hero>
    );
};
