import { Button, Hero } from '@components/common';
import { HomePageHeroSectionsType } from './shared.types';

export const Contact = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    return (
        <Hero
            id={id}
            sectionTitle="Contact"
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
