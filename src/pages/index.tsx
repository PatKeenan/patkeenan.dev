import Head from 'next/head';

import type { NextPageExtended } from '@types';

import {
    Experience,
    Introduction,
    Projects,
    Skills,
    Contact,
} from '@components/page-specific';
import { Favicons } from '@components/common';

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
        </>
    );
};

export default Home;
