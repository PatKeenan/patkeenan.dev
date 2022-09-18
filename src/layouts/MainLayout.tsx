import { Li, Nav, Ul } from '@components/common';
import type { ChildrenProps } from '@types';
import Link from 'next/link';
import React from 'react';

export const MainLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="overflow-scroll snap-y snap-mandatory h-screen z-0">
            <Nav
                className="sticky top-0 z-50 py-6 px-4 border-t-white/5"
                variant="dark"
            >
                <Ul className="h-stack space-x-4 text-sm uppercase">
                    <Li>
                        <Link href="#home">
                            <a>Home</a>
                        </Link>
                    </Li>
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
                            <a>contact</a>
                        </Link>
                    </Li>
                </Ul>
            </Nav>

            {children}
        </div>
    );
};
