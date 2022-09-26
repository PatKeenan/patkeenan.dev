import { Button, Hero } from '@components/common';
import { HomePageHeroSectionsType } from './shared.types';
import * as React from 'react';
import { useIsInViewport } from '@hooks';
import { useStore } from '@store';

export const Contact = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    const sectionRef = React.useRef<HTMLDivElement | null>(null);
    const isInViewport = useIsInViewport(sectionRef);
    const { setActiveSection } = useStore();

    React.useEffect(() => {
        if (isInViewport) {
            setActiveSection('Contact');
        }
    }, [isInViewport, setActiveSection]);

    return (
        <Hero
            id={id}
            sectionTitle="Contact"
        >
            <div ref={sectionRef}>
                <Button variant="dark">Button 1</Button>
                <Button
                    variant="dark"
                    fill="outlined"
                >
                    Button 2
                </Button>
            </div>
        </Hero>
    );
};
