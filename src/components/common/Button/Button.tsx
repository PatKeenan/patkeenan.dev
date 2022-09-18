import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import clsx from 'clsx';

import {
    getStylesFromProps,
    getStylesFromVariant,
    ThemePropsWithVariant,
    baseTapEffects,
    baseHoverEffects,
    baseTransitionEffects,
} from '@utils/theme';

type ButtonProps = Partial<ThemePropsWithVariant> & HTMLMotionProps<'button'>;

export const Button = ({
    children,
    className,
    variant = 'primary',
    fill = 'contained',
    bgColor,
    borderColor,
    textColor,
    outlineColor,
    ...buttonProps
}: ButtonProps) => {
    const buttonStyles = getStylesFromProps({
        bgColor,
        borderColor,
        textColor,
        outlineColor,
    });
    return (
        <motion.button
            whileTap={baseTapEffects}
            whileHover={baseHoverEffects}
            transition={baseTransitionEffects}
            className={clsx(
                variant && getStylesFromVariant(variant, fill),
                'border-2 text-in shadow focus:ring ring-blue-400 ring-offset-1 outline-none focus:outline-none min-w-[100px] px-4 py-2 rounded-md',
                className,
                buttonStyles
            )}
            {...buttonProps}
        >
            {children}
        </motion.button>
    );
};
