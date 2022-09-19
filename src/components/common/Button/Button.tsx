import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

import {
    getStylesFromProps,
    getStylesFromVariant,
    baseTapEffects,
    baseHoverEffects,
    baseTransitionEffects,
} from '@utils/theme';

import type { ThemePropsWithVariant } from '@utils/theme';
import Link from 'next/link';

export type ButtonProps = Partial<ThemePropsWithVariant> &
    HTMLMotionProps<'button'> & {
        href?: string;
        as?: 'icon' | 'button';
    };

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        as,
        href,
        variant = 'primary',
        fill = 'contained',
        bgColor,
        borderColor,
        textColor,
        outlineColor,
        ...buttonProps
    } = props;

    const buttonStyles = getStylesFromProps({
        bgColor,
        borderColor,
        textColor,
        outlineColor,
    });

    const sharedProperties = {
        whileHover: baseHoverEffects,
        whileTap: baseTapEffects,
        transition: baseTransitionEffects,
        className: clsx(
            variant && getStylesFromVariant(variant, fill),
            as == 'icon'
                ? 'w-8 h-8 grid place-items-center rounded-full'
                : 'min-w-[100px]  px-4 py-2 rounded-md',
            'border-2 text-in shadow focus:ring ring-blue-400 ring-offset-1 outline-none focus:outline-none ',
            className,
            variant == ('success' || 'primary') && href && 'hover:text-dark',
            buttonStyles
        ),
    };

    return !href ? (
        <motion.button
            {...sharedProperties}
            {...buttonProps}
        >
            {children}
        </motion.button>
    ) : (
        <Link
            href={href}
            passHref
        >
            <motion.a {...sharedProperties}>{children}</motion.a>
        </Link>
    );
};
