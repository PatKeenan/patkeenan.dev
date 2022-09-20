import { Div, Hero, SocialIcons } from '@components/common';
import Image from 'next/image';

import type { HomePageHeroSectionsType } from './shared.types';

export const Introduction = (props: HomePageHeroSectionsType) => {
    const { id } = props;
    return (
        <Hero
            id={id}
            variant="dark"
            maxWidth
        >
            <Div className="v-stack lg:h-stack justify-center gap-4 my-auto">
                <Div className="text-center lg:text-left w-full lg:w-1/3 h-full">
                    <div className="h-[175px] w-[175px] md:h-[250px] md:w-[250px] mx-auto relative justify-center ">
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Culpa itaque nesciunt doloribus, sed libero
                        dignissimos laudantium, corrupti fugit mollitia facilis,
                        animi fugiat quam modi laborum molestias! Cum cumque
                        excepturi illum.
                    </p>
                    <SocialIcons />
                </Div>
            </Div>
        </Hero>
    );
};
