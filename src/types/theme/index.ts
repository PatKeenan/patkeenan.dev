import {
    baseVariantsNames,
    bgColorOptions,
    borderColorOptions,
    containerOptions,
    fontSizeOptions,
    marginOptions,
    outlineColorOptions,
    paddingOptions,
    ringColorOptions,
    scrollThumbColorOptions,
    scrollTrackColorOptions,
    textColorOptions,
} from '@utils/theme';
import type { ChildrenProps } from 'types/general';
import type { KeysOf } from 'types/utility';

export interface ThemeProps {
    fontSize: KeysOf<typeof fontSizeOptions>;
    padding: KeysOf<typeof paddingOptions>;
    margin: KeysOf<typeof marginOptions>;
    bgColor: KeysOf<typeof bgColorOptions>;
    textColor: KeysOf<typeof textColorOptions>;
    ringColor: KeysOf<typeof ringColorOptions>;
    borderColor: KeysOf<typeof borderColorOptions>;
    outlineColor: KeysOf<typeof outlineColorOptions>;
    scrollTrackColor: KeysOf<typeof scrollTrackColorOptions>;
    scrollThumbColor: KeysOf<typeof scrollThumbColorOptions>;
    fullWidth: boolean;
}

export type ThemePropsWithVariant = Partial<ThemeProps> & {
    variant: VariantOptionsKeys;
    fill: FillOptions;
};

export type VariantOptionsType = {
    [Property in typeof baseVariantsNames[number]]: string;
};
export type VariantOptionsKeys = keyof VariantOptionsType;

export type FillOptions = 'outlined' | 'contained';

export type BasePropsWithTheme = Partial<ThemeProps> & ChildrenProps;
export type BasePropsWithThemeAndVariant = Partial<ThemePropsWithVariant> &
    ChildrenProps;

export type ContainerOptionsType = {
[Property in typeof containerOptions[number]]: string;
};

export type BaseContainerProps = BasePropsWithThemeAndVariant & {
    as?: KeysOf<ContainerOptionsType>;
    className?: string;
};
