import { Favicons } from '@components/other';
import { Div } from '@components/common';
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    Introduction,
    Experience,
    Projects,
    Skills,
    Contact,
} from '@components/sections';

import type { NextPageExtended } from 'types/general';

const Home: NextPageExtended = () => {
    return (
        <>
            <Head>
                <title>Patrick Keenan</title>
                <meta
                    name="description"
                    content=""
                />
                <meta
                    name="viewport"
                    content="width = device-width, initial-scale = 1.0, minimum-scale = 1, maximum-scale = 1, user-scalable = no"
                />

                <meta
                    name="theme-color"
                    content="#2e343e"
                />

                <meta
                    name="apple-mobile-web-app-capable"
                    content="yes"
                />

                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta
                    name="mobile-web-app-capable"
                    content="yes"
                />

                <Favicons />
            </Head>

            <Introduction id="home" />

            <Experience id="experience" />

            <Projects id="projects" />

            <Skills id="skills" />

            <Contact id="contact" />
            <Div
                className="sticky bottom-0 left-[100%] px-2 py-1  whitespace-nowrap  lg:px-4 lg:w-[350px]  lg:py-2 text-sm text-center lg:rounded-tl-lg h-stack justify-center space-x-2"
                variant="success"
            >
                <p>Open to New Opportunities:</p>
                <Link href="/#contact">
                    <a className="text-dark hover:text-blue-900/70 font-semibold hover:underline">
                        Contact Me
                    </a>
                </Link>
            </Div>
        </>
    );
};

export default Home;
