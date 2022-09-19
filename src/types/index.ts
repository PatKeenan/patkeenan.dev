import type { NextComponentType, NextPage, NextPageContext } from "next";
import type {ReactNode, ElementType} from "react";
import type { AppInitialProps } from "next/app";
import type { ThemeProps, ThemePropsWithVariant } from '@utils/theme';
import type { Router } from "next/router";
import { KeysOf } from "./utility";


export type LayoutOptions = 'main' | 'blogPage' | 'projectPage'

export type CustomPageParams = {
    layout?: LayoutOptions;
}

export type NextPageExtended = NextPage & CustomPageParams;

export type ComponentType<P> = NextComponentType<NextPageContext, any, P> & CustomPageParams;

export type AppProps<P = {}> = AppInitialProps & {
    Component: ComponentType<P>;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
    __N_RSC?: boolean | undefined;
}

export type ChildrenProps = {
    children?: ReactNode | ReactNode[]}

export type BasePropsWithTheme =  Partial<ThemeProps> & ChildrenProps
export type  BasePropsWithThemeAndVariant = Partial<ThemePropsWithVariant> & ChildrenProps

export const containerOptions = [ 'div','section','article', 'span', 'nav', 'ul', 'li'] as const
export type ContainerOptionsType = { [Property in typeof containerOptions[number]]: string}

export type BaseContainerProps = BasePropsWithThemeAndVariant & {
    as?: KeysOf<ContainerOptionsType>;
};

export * from './utility'

