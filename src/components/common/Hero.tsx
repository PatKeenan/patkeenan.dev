import { Section } from '@components/common';
import { siteWidth } from '@utils/theme';
import clsx from 'clsx';
import React from 'react';

import type { BaseContainerProps } from 'types/theme';

type HeroProps = BaseContainerProps & {
    sectionTitle?: string;
    id?: string;
    maxWidth?: boolean;
    centeredContent?: boolean;
    snap?: boolean;
};

export const Hero = (props: HeroProps) => {
    const {
        children,
        sectionTitle,
        id,
        centeredContent = true,
        maxWidth = false,
        snap = true,
        ...rest
    } = props;
    return (
        <Section
            className={clsx(snap && 'snap-start', 'hero md:space-y-6')}
            id={id}
            {...rest}
        >
            {sectionTitle && (
                <h2 className="tracking-widest font-bold flex-shrink-0 md:mt-24 text-2xl md:text-[2.618rem] mt-16 text-center">
                    {sectionTitle}
                </h2>
            )}
            <div
                className={clsx(
                    maxWidth ? siteWidth : 'w-full',
                    centeredContent && 'justify-center',
                    'relative flex-1 v-stack h-full flex-shrink-0'
                )}
            >
                {children}
            </div>
        </Section>
    );
};
