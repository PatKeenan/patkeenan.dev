import { BasePropsWithTheme } from '@types';
import React from 'react';

export const ElementContainer = (props: BasePropsWithTheme) => {
    const { as, ...rest } = props;
    const HtmlTag = as ?? 'div';
    return <HtmlTag {...rest} />;
};
