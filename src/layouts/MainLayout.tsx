import { Navigation, Header, Main } from '@components/common';
import type { ChildrenProps } from 'types/general';
import React from 'react';

export const MainLayout = ({ children }: ChildrenProps) => {
    return (
        <React.Fragment>
            <Header
                className="sticky top-0 z-50 py-4 px-4 border-t-white/5 h-stack w-full tracking-widest"
                variant="dark"
            >
                <Navigation />
            </Header>

            <Main>{children}</Main>
        </React.Fragment>
    );
};
