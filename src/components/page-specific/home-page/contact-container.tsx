import { Button } from '@components/common';
import { Hero } from '@components/sections';
import { HomePageContainersType } from './shared.types';

export const Contact = (props: HomePageContainersType) => {
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
