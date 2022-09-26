import { Button, Hero } from '@components/common';
import type { HomePageHeroSectionsType } from './shared.types';
import * as React from 'react';
import { useIsInViewport } from '@hooks';
import { useStore } from '@store';
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

    const reactskillPercent = '80%';
    return (
        <Hero
            id={id}
            sectionTitle="Skills"
            variant="dark"
        >
            <div ref={sectionRef}>
                <div>
                    <div>React</div>
                    <div className="h-stack space-x-2 group">
                        <div className="w-24 h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                            <div
                                className={`h-2 rounded-lg bg-primary absolute left-0 w-[${reactskillPercent}] group-hover:bg-green-400 align-middle  justify-end flex`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>NextJs</div>
                    <div className="h-stack space-x-2 group">
                        <div className="w-24 h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                            <div
                                className={`h-2 rounded-lg bg-primary absolute left-0 w-[${reactskillPercent}] group-hover:bg-green-400 align-middle  justify-end flex`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Golang</div>
                    <div className="h-stack space-x-2 group">
                        <div className="w-24 h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                            <div
                                className={`h-2 rounded-lg bg-primary absolute left-0 w-[20%] group-hover:bg-green-400 align-middle  justify-end flex`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Rust</div>
                    <div className="h-stack space-x-2 group">
                        <div className="w-24 h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                            <div
                                className={`h-2 rounded-lg bg-primary absolute left-0 w-[20%] group-hover:bg-green-400 align-middle  justify-end flex`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Luna</div>
                    <div className="h-stack space-x-2 group">
                        <div className="w-24 h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                            <div
                                className={`h-2 rounded-lg bg-primary absolute left-0 w-[20%] group-hover:bg-green-400 align-middle  justify-end flex`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>PHP</div>
                    <div className="h-stack space-x-2 group">
                        <div className="w-24 h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                            <div
                                className={`h-2 rounded-lg bg-primary absolute left-0 w-[20%] group-hover:bg-green-400 align-middle  justify-end flex`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </Hero>
    );
};
