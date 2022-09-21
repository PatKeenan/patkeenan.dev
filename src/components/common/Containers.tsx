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

export const ElementContainer = ({
    className,
    ...props
}: BaseContainerProps & {
    className?: string;
}) => {
    const {
        as = 'div',
        variant,
        fill = 'contained',
        bgColor,
        borderColor,
        fontSize,
        textColor,
        fullWidth = true,
        outlineColor,
        scrollThumbColor,
        scrollTrackColor,
        ...rest
    } = props;
    const HtmlTag = motion[as];

    const containerStyles = getStylesFromProps({
        bgColor,
        borderColor,
        textColor,
        outlineColor,
        scrollThumbColor,
        scrollTrackColor,
    });

    return (
        <AnimatePresence>
            <HtmlTag
                {...rest}
                className={clsx(
                    variant && getStylesFromVariant(variant, fill),
                    variant && variant !== 'none' && 'border',
                    className,
                    containerStyles,
                    !fullWidth && siteWidth
                )}
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
