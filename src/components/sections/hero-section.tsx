import { Div, Section } from '@components/common';
import { BaseContainerProps } from '@types';
import { siteWidth } from '@utils/theme';
import clsx from 'clsx';
import React from 'react';

type HeroProps = BaseContainerProps & {
    sectionTitle?: string;
    id?: string;
    maxWidth?: boolean;
    overflow?: boolean;
};

export const Hero = (props: HeroProps) => {
    const {
        children,
        sectionTitle,
        id,
        maxWidth = false,
        overflow = false,
        ...rest
    } = props;
    return (
        <Section
            className="hero snap-center relative w-full px-4 v-stack space-y-6 "
            id={id}
            {...rest}
        >
            {sectionTitle && (
                <h2 className="tracking-widest font-bold flex-shrink-0 mt-24">
                    {sectionTitle}
                </h2>
            )}
            <div
                className={clsx(
                    maxWidth ? siteWidth : 'w-full',
                    'relative z-0',
                    'h-[calc(100%-400px)] flex-grow v-stack',
                    overflow ? 'overflow-auto' : 'overflow-hidden'
                )}
            >
                {children}
            </div>
        </Section>
    );
};
