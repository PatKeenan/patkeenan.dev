import { Section, Navigation } from '@components/common';
import type { ChildrenProps } from 'types/general';
import React from 'react';

export const MainLayout = ({ children }: ChildrenProps) => {
    return (
        <div className="overflow-y-auto snap-y snap-mandatory h-screen z-0 overflow-x-hidden scrollbar-thumb-[#67949e] scrollbar-thin">
            <Section
                className="sticky top-0 z-50 py-4 px-4 border-t-white/5 h-stack w-full tracking-widest"
                variant="dark"
            >
                <Navigation />
            </Section>

            {children}
        </div>
    );
};
