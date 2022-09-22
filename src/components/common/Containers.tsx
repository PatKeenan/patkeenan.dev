import {
    getStylesFromProps,
    getStylesFromVariant,
    siteWidth,
} from '@utils/theme';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import type { BaseContainerProps } from 'types/theme';
import type { HTMLMotionProps } from 'framer-motion';
import React, { ReactHTML } from 'react';

export type ContainerPropTypes<T extends keyof ReactHTML> = BaseContainerProps &
    HTMLMotionProps<T>;

export const ElementContainer = (props: BaseContainerProps) => {
    const {
        as = 'div',
        variant,
        fill = 'contained',
        bgColor,
        borderColor,
        fontSize,
        textColor,
        className,
        fullWidth = true,
        outlineColor,
        scrollThumbColor,
        padding,
        scrollTrackColor,
        ...rest
    } = props;
    const HtmlTag = motion[as];

    const containerStyles = getStylesFromProps({
        bgColor,
        borderColor,
        textColor,
        outlineColor,
        padding,
        scrollThumbColor,
        scrollTrackColor,
    });

    return (
        <AnimatePresence>
            <HtmlTag
                {...rest}
                className={
                    clsx(
                        variant && getStylesFromVariant(variant, fill),
                        variant && variant !== 'none' && 'border',
                        className,
                        containerStyles,
                        !fullWidth && siteWidth
                    ) || undefined
                }
            />
        </AnimatePresence>
    );
};
export const Section = (props: ContainerPropTypes<'section'>) => {
    return (
        <ElementContainer
            as="section"
            {...props}
        />
    );
};
export const Header = (props: ContainerPropTypes<'header'>) => {
    return (
        <ElementContainer
            as="header"
            {...props}
        />
    );
};
export const Main = (props: ContainerPropTypes<'main'>) => {
    return (
        <ElementContainer
            as="main"
            {...props}
        />
    );
};
export const Figure = (props: ContainerPropTypes<'figure'>) => {
    return (
        <ElementContainer
            as="figure"
            {...props}
        />
    );
};
export const Div = (props: ContainerPropTypes<'div'>) => {
    return (
        <ElementContainer
            as="div"
            {...props}
        />
    );
};

export const Article = (props: ContainerPropTypes<'article'>) => {
    return (
        <ElementContainer
            as="article"
            {...props}
        />
    );
};
export const Footer = (props: ContainerPropTypes<'footer'>) => {
    return (
        <ElementContainer
            as="footer"
            {...props}
        />
    );
};

export const Nav = (props: ContainerPropTypes<'nav'>) => {
    return (
        <ElementContainer
            as="nav"
            {...props}
        />
    );
};
export type NavType = typeof Nav;

export const Ul = (props: ContainerPropTypes<'ul'>) => {
    return (
        <ElementContainer
            as="ul"
            {...props}
        />
    );
};
export type UlType = typeof Ul;

export const Li = (props: ContainerPropTypes<'li'>) => {
    return (
        <ElementContainer
            as="li"
            {...props}
        />
    );
};
export type Li = typeof Li;
