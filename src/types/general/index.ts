import type { NextComponentType, NextPage, NextPageContext } from 'next';
import type { ReactNode } from 'react';
import type { AppInitialProps } from 'next/app';
import type { Router } from 'next/router';

export type LayoutOptions = 'main' | 'blogPage' | 'projectPage';

export type CustomPageParams = {
    layout?: LayoutOptions;
};

export type NextPageExtended = NextPage & CustomPageParams;

export type ComponentType<P> = NextComponentType<NextPageContext, any, P> &
    CustomPageParams;

export type AppProps<P = {}> = AppInitialProps & {
    Component: ComponentType<P>;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
    __N_RSC?: boolean | undefined;
};

export type ChildrenProps = {
    children?: ReactNode | ReactNode[];
};
