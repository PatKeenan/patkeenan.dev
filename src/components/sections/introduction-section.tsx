import { Div, Hero, SocialIcons } from '@components/common';
import { useIsInViewport } from '@hooks';
import { useStore } from '@store';
import Image from 'next/image';
import * as React from 'react';
import type { HomePageHeroSectionsType } from './shared.types';

export const Introduction = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    const sectionRef = React.useRef<HTMLDivElement | null>(null);
    const isInViewport = useIsInViewport(sectionRef);
    const { setActiveSection } = useStore();

    React.useEffect(() => {
        if (isInViewport) {
            setActiveSection('Home');
        }
    }, [isInViewport, setActiveSection]);

    return (
        <Hero
            id={id}
            variant="dark"
            maxWidth
        >
            <div ref={sectionRef}>
                <Div className="v-stack lg:h-stack justify-center gap-4 grid place-items-center">
                    <Div className="text-center lg:text-left w-full lg:w-1/3 h-full">
                        <div className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] mx-auto relative justify-center ">
                            <div
                                className="h-8 w-8 md:h-10 md:w-10 md:10 lg:10 absolute z-10 right-3 md:right-4 md:bottom-4 rounded-full bottom-2 lg:-bottom-[.35rem] lg:-right-[.4rem] lg:rounded-lg bg-success border-[6px] border-dark"
                                title="Open to exploring new opportunities"
                            />
                            <Image
                                priority
                                src="/patrick-keenan.jpeg"
                                alt="Patrick Keenan"
                                height={250}
                                width={250}
                                layout="responsive"
                                className="rounded-full lg:rounded-lg object-cover z-0"
                            />
                        </div>
                    </Div>
                    <Div className="text-center lg:text-left w-full lg:w-2/3 flex-shrink-0 space-y-2 justify-center v-stack">
                        <div>
                            <h1 className="font-bold tracking-widest text-2xl md:text-5xl lg:text-6xl whitespace-nowrap">
                                Patrick Keenan
                            </h1>
                            <h3 className="font-light text-lg uppercase whitespace-nowrap lg:mt-2 text-primary">
                                Web Developer
                            </h3>
                        </div>

                        <p className="max-w-prose mx-auto lg:mx-0">
                            Full stack web developer specializing in building
                            single and multi page applications using React,
                            NextJS, Tailwind, tRPC, and Prisma. Feel free to
                            explore the sample projects listed below to learn
                            more about me!
                        </p>
                        <SocialIcons />
                    </Div>
                </Div>
            </div>
        </Hero>
    );
};
