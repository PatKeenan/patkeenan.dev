import Head from 'next/head';

import type { NextPageExtended } from '@types';
import { Button } from '@components/common/Button';

const Home: NextPageExtended = () => {
    return (
        <div>
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
            <div className="block space-y-2 px-4">
                <h1>Hello</h1>

                <Button
                    variant="danger"
                    fill="contained"
                >
                    Primary outlined
                </Button>
            </div>
        </div>
    );
};

export default Home;
