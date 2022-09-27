import { Favicons } from '@components/other';
import * as React from 'react';
import Head from 'next/head';
import {
    Introduction,
    Experience,
    Projects,
    Skills,
    Contact,
} from '@components/sections';
import 'react-toastify/dist/ReactToastify.css';

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
        </>
    );
};

export default Home;
