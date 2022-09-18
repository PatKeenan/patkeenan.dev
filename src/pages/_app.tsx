import { MainLayout } from '@layouts/MainLayout';
import { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
