import React from 'react';

import { Button, ButtonProps, Div } from '@components/common';
import { VscGithub } from 'react-icons/vsc';
import { FaAws, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const SocialIcons = () => {
    const sharedProps: ButtonProps = {
        as: 'icon',
        variant: 'none',
        borderColor: 'transparent',
        bgColor: 'transparent',
    };
    return (
        <Div className="h-stack space-x-2 w-full items-center justify-center lg:justify-start">
            <Button
                href="https://github.com/PatKeenan"
                {...sharedProps}
            >
                <VscGithub className="mx-auto h-[80%] w-[80%]" />
            </Button>
            <Button
                href="https://github.com/PatKeenan"
                {...sharedProps}
            >
                <FaLinkedin className="mx-auto h-[80%] w-[80%]" />
            </Button>
            <Button
                href="https://github.com/PatKeenan"
                {...sharedProps}
            >
                <FaStackOverflow className="mx-auto h-[80%] w-[80%]" />
            </Button>

            <Button
                href="https://github.com/PatKeenan"
                {...sharedProps}
            >
                <FaAws className="mx-auto h-[80%] w-[80%]" />
            </Button>
            <Button
                href="https://github.com/PatKeenan"
                {...sharedProps}
            >
                <MdEmail className="mx-auto h-[80%] w-[80%]" />
            </Button>
        </Div>
    );
};
