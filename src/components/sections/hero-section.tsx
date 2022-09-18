import { Section } from '@components/common';
import { BasePropsWithThemeAndVariant } from '@types';
import React from 'react';

type HeroProps = BasePropsWithThemeAndVariant & {
    sectionTitle?: string;
    id?: string;
};

export const Hero = (props: HeroProps) => {
    const { children, sectionTitle, id, ...rest } = props;
    return (
        <Section
            className="hero snap-center relative w-full"
            id={id}
            {...rest}
        >
            {sectionTitle && (
                <h2 className="absolute top-24 z-0 tracking-wide font-semibold">
                    {sectionTitle}
                </h2>
            )}
            {children}
        </Section>
    );
};
