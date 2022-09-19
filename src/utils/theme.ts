import clsx from 'clsx';
import { KeysOf } from '@types';
import { TargetAndTransition, Transition, VariantLabels } from 'framer-motion';
export interface BaseHTMLProps {
    children: React.ReactNode;
}

export interface ThemeProps {
    fontSize: KeysOf<typeof fontSizeOptions>;
    padding: KeysOf<typeof paddingOptions>;
    margin: KeysOf<typeof marginOptions>;
    bgColor: KeysOf<typeof bgColorOptions>;
    textColor: KeysOf<typeof textColorOptions>;
    ringColor: KeysOf<typeof ringColorOptions>;
    borderColor: KeysOf<typeof borderColorOptions>;
    outlineColor: KeysOf<typeof outlineColorOptions>;
}

export type ThemePropsWithVariant = Partial<ThemeProps> &  {
    variant: VariantOptionsKeys;
    fill: FillOptions;
}

export type VariantOptionsType = {
    [Property in typeof baseVariantsNames[number]]: string
}
export type VariantOptionsKeys = keyof VariantOptionsType

export type FillOptions = 'outlined' | 'contained'

const baseVariantsNames = [
    'primary',
    'warning',
    'success',
    'default',
    'danger',
    'light',
    'light-accent',
    'dark',
    'transparent',
    'none'
] as const;


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
    transparent: 'bg-transparent'
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
    transparent: 'outline-transparent'
}

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
    transparent: 'border-transparent'
}

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
    transparent: 'ring-transparent'
}

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
    transparent: 'text-transparent'
};

export const marginOptions = {
    primary: 'm-2',
    'primary-x': 'mx-2',
    'primary-y': 'my-2',
};

export const siteWidth = 'max-w-6xl mx-auto'


export function getStylesFromProps(props: Partial<ThemeProps | ThemePropsWithVariant>) {
    const { padding, fontSize, textColor, bgColor, outlineColor, borderColor } = props;
    return clsx(
        fontSize && fontSizeOptions[fontSize],
        padding && paddingOptions[padding],
        textColor && textColorOptions[textColor],
        bgColor && bgColorOptions[bgColor],
        outlineColor && outlineColorOptions[outlineColor],
        borderColor && borderColorOptions[borderColor]
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
              textColorOptions[variant == 'light' ? 'dark': 'light'],
              borderColorOptions[variant]
          );
};



export const baseTapEffects: VariantLabels | TargetAndTransition = {
    scale: .97
}
export const baseHoverEffects: VariantLabels | TargetAndTransition = {
    opacity: .92
}
export const baseTransitionEffects: Transition = {
    type: 'tween',
    duration: .13
}



