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
    variant = 'primary',
    fill = 'contained',
    ...buttonProps
}: ButtonProps) => (
    <motion.button
        whileTap={baseTapEffects}
        whileHover={baseHoverEffects}
        transition={baseTransitionEffects}
        className={clsx(
            getStylesFromProps(buttonProps),
            variant && getStylesFromVariant(variant, fill),
            'border-2 text-in shadow focus:ring ring-blue-400 ring-offset-2 m-2 outline-none focus:outline-none min-w-[100px] px-4 py-2 rounded-md'
        )}
        {...buttonProps}
    >
        {children}
    </motion.button>
);

export default Button;
