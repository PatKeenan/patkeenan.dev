import { Section } from '@components/common';
import { ExperienceCard, Hero } from '@components/sections';
import { HomePageContainersType } from './shared.types';

export const Experience = (props: HomePageContainersType) => {
    const { id } = props;
    return (
        <Hero
            id={id}
            variant="dark"
            sectionTitle="Experience"
            maxWidth={false}
        >
            <Section className="h-stack h-full w-full overflow-x-scroll mx-auto space-x-5 px-10 snap-x snap-mandatory">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </Section>
        </Hero>
    );
};
