import Head from 'next/head';

import type { NextPageExtended } from '@types';
import { Button, Div, Section } from '@components/common';
import { Hero, ProjectCard } from '@components/sections';

const Home: NextPageExtended = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content=""
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            {/* ~~~~~ Introduction/About + ContactButton ~~~~~ */}
            <Hero
                id="home"
                variant="dark"
            >
                <Div className="text-left w-1/2">
                    <h1 className="font-semibold tracking-widest">
                        Patrick Keenan
                    </h1>
                    <h3 className="font-semibold">React.js Developer</h3>
                </Div>
                <Div className="text-left w-1/3">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Culpa itaque nesciunt doloribus, sed libero
                        dignissimos laudantium, corrupti fugit mollitia facilis,
                        animi fugiat quam modi laborum molestias! Cum cumque
                        excepturi illum.
                    </p>
                </Div>
            </Hero>
            {/* ~~~~~ Experience ~~~~~ */}
            <Hero
                id="experience"
                variant="light"
                sectionTitle="Experience"
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusamus natus ipsam illum nisi odio veniam voluptatibus
                    architecto in blanditiis sequi, voluptas unde vitae quae
                    ducimus sint? Sed iusto asperiores aspernatur?
                </p>
            </Hero>
            {/* ~~~~~ Projects ~~~~~ */}
            <Hero
                id="projects"
                variant="default"
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
            {/* ~~~~~ Skills ~~~~~ */}
            <Hero
                id="skills"
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
            {/* ~~~~~ Contact ~~~~~ */}
            <Hero
                id="contact"
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
        </>
    );
};

export default Home;
