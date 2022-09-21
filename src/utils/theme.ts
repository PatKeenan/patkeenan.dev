import type {
    ThemeProps,
    ThemePropsWithVariant,
    VariantOptionsKeys,
    VariantOptionsType,
} from 'types/theme';

import type {
    TargetAndTransition,
    Transition,
    VariantLabels,
} from 'framer-motion';

import clsx from 'clsx';

/** -------- General --------  **/
export const themeColorsAsHex: VariantOptionsType = {
    primary: '#67949e',
    warning: '#d1952e',
    success: '#54a667',
    default: '#97999b',
    danger: '#f44034',
    light: '#f4f6f6',
    'light-accent': '#97999b',
    dark: '#2e343e',
    transparent: '0',
    none: 'none',
};

export const baseVariantsNames = [
    'primary',
    'warning',
    'success',
    'default',
    'danger',
    'light',
    'light-accent',
    'dark',
    'transparent',
    'none',
] as const;

export const siteWidth = 'max-w-6xl mx-auto';

/** -------- Options --------  **/

export const fontSizeOptions = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
};

export const paddingOptions = {
    primary: 'p-2',
    'primary-x': 'px-2',
    'primary-y': 'py-2',
};

export const bgColorOptions: VariantOptionsType = {
    light: 'bg-light',
    'light-accent': 'bg-light-accent',
    primary: 'bg-primary',
    dark: 'bg-dark',
    default: 'bg-dark-accent',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
    none: '',
    transparent: 'bg-transparent',
};

export const outlineColorOptions: VariantOptionsType = {
    light: 'outline-light',
    'light-accent': 'outline-light-accent',
    primary: 'outline-primary',
    dark: 'outline-dark',
    default: 'outline-dark-accent',
    success: 'outline-success',
    warning: 'outline-warning',
    danger: 'outline-danger',
    none: '',
    transparent: 'outline-transparent',
};

export const borderColorOptions: VariantOptionsType = {
    light: 'border-light',
    'light-accent': 'border-light-accent',
    primary: 'border-primary',
    dark: 'border-dark',
    default: 'border-dark-accent',
    success: 'border-success',
    warning: 'border-warning',
    danger: 'border-danger',
    none: '',
    transparent: 'border-transparent',
};

export const ringColorOptions: VariantOptionsType = {
    light: 'ring-light',
    'light-accent': 'ring-light-accent',
    primary: 'ring-primary',
    dark: 'ring-dark',
    default: 'ring-dark-accent',
    success: 'ring-success',
    warning: 'ring-warning',
    danger: 'ring-danger',
    none: '',
    transparent: 'ring-transparent',
};

export const textColorOptions: VariantOptionsType = {
    light: 'text-light',
    'light-accent': 'text-light-accent',
    primary: 'text-primary',
    dark: 'text-dark',
    default: 'text-dark-accent',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-danger',
    none: '',
    transparent: 'text-transparent',
};

export const scrollThumbColorOptions: VariantOptionsType = {
    light: 'scrollbar-thumb-[#f4f6f6]',
    'light-accent': 'scrollbar-thumb-[#97999b]',
    primary: 'scrollbar-thumb-[#67949e]',
    dark: 'scrollbar-thumb-[#2e343e]',
    default: 'scrollbar-thumb-[#97999b]',
    success: 'scrollbar-thumb-[#54a667]',
    warning: 'scrollbar-thumb-[#d1952e]',
    danger: 'scrollbar-thumb-[#f44034]',
    none: '',
    transparent: '',
};
export const scrollTrackColorOptions: VariantOptionsType = {
    light: 'scrollbar-thumb-[#f4f6f6]',
    'light-accent': 'scrollbar-track-[#97999b]',
    primary: 'scrollbar-track-[#67949e]',
    dark: 'scrollbar-track-[#2e343e]',
    default: 'scrollbar-track-[#97999b]',
    success: 'scrollbar-track-[#54a667]',
    warning: 'scrollbar-track-[#d1952e]',
    danger: 'scrollbar-track-[#f44034]',
    none: '',
    transparent: '',
};

export const marginOptions = {
    primary: 'm-2',
    'primary-x': 'mx-2',
    'primary-y': 'my-2',
};

export const containerOptions = [
    'div',
    'section',
    'article',
    'span',
    'nav',
    'ul',
    'li',
    'header',
    'main',
] as const;

/** -------- Utilities --------  **/

export function getStylesFromProps(
    props: Partial<ThemeProps | ThemePropsWithVariant>
) {
    const {
        padding,
        fontSize,
        textColor,
        scrollThumbColor,
        scrollTrackColor,
        bgColor,
        outlineColor,
        borderColor,
        fullWidth = true,
    } = props;
    return clsx(
        fontSize && fontSizeOptions[fontSize],
        padding && paddingOptions[padding],
        textColor && textColorOptions[textColor],
        bgColor && bgColorOptions[bgColor],
        outlineColor && outlineColorOptions[outlineColor],
        borderColor && borderColorOptions[borderColor],
        scrollThumbColor && scrollThumbColorOptions[scrollThumbColor],
        scrollTrackColor && scrollTrackColorOptions[scrollTrackColor],
        !fullWidth && siteWidth
    );
}

export const getStylesFromVariant = (
    variant: VariantOptionsKeys,
    fill: 'outlined' | 'contained'
) => {
    return fill == 'outlined'
        ? clsx(
              bgColorOptions['none'],
              textColorOptions[variant],
              borderColorOptions[variant]
          )
        : clsx(
              bgColorOptions[variant],
              textColorOptions[variant == 'light' ? 'dark' : 'light'],
              borderColorOptions[variant]
          );
};

/** -------- Motion --------  **/

export const baseTapEffects: VariantLabels | TargetAndTransition = {
    scale: 0.97,
};
export const baseHoverEffects: VariantLabels | TargetAndTransition = {
    opacity: 0.92,
};
export const baseTransitionEffects: Transition = {
    type: 'tween',
    duration: 0.13,
};
