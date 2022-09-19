import { Li, Nav, Section, Ul } from '@components/common';
import type { ChildrenProps } from '@types';
import { siteWidth } from '@utils/theme';
import clsx from 'clsx';

import Link from 'next/link';
import React from 'react';

export const MainLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="overflow-auto snap-y snap-mandatory h-screen z-0">
            <Section
                className="sticky top-0 z-50 py-4 px-4 border-t-white/5 h-stack w-full tracking-widest"
                variant="dark"
            >
                <Nav
                    className={clsx(
                        siteWidth,
                        'h-stack w-full justify-between text-sm lg:text-base'
                    )}
                >
                    <Link href="#home">
                        <a>Pat Keenan</a>
                    </Link>
                    <Ul className="h-stack space-x-4  items-center">
                        <Li>
                            <Link href="#experience">
                                <a>Experience</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="#projects">
                                <a>Projects</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="#skills">
                                <a>Skills</a>
                            </Link>
                        </Li>
                        <Li>
                            <Link href="#contact">
                                <a>Contact</a>
                            </Link>
                        </Li>
                    </Ul>
                </Nav>
            </Section>

            {children}
        </div>
    );
};
