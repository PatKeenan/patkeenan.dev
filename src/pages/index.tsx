import Head from 'next/head';

import type { NextPageExtended } from '@types';

import {
    Experience,
    Introduction,
    Projects,
    Skills,
    Contact,
} from '@components/page-specific';
import { Button, Div, Favicons } from '@components/common';
import Link from 'next/link';

const Home: NextPageExtended = () => {
    return (
        <>
            <Head>
                <title>Patrick Keenan</title>
                <meta
                    name="description"
                    content=""
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
