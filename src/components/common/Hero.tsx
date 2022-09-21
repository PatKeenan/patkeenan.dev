import { Section } from '@components/common';
import { siteWidth } from '@utils/theme';
import clsx from 'clsx';
import React from 'react';

import type { BaseContainerProps } from 'types/theme';

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
            className="hero snap-center relative w-full px-4 v-stack space-y-3 md:space-y-6 "
            id={id}
            {...rest}
        >
            {sectionTitle && (
                <h2 className="tracking-widest font-bold flex-shrink-0 md:mt-24 mt-16 text-2xl md:text-[2.618rem]">
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
