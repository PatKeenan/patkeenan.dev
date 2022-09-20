import { Button, Hero } from '@components/common';
import type { HomePageHeroSectionsType } from './shared.types';

export const Skills = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    return (
        <Hero
            id={id}
            sectionTitle="Skills"
            variant="dark"
        >
            <Button variant="dark">Button 1</Button>
            <Button
                variant="dark"
                fill="outlined"
            >
                Button 2
            </Button>
        </Hero>
    );
};
