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
                href="https://www.linkedin.com/in/pat-keenan/"
                {...sharedProps}
            >
                <FaLinkedin className="mx-auto h-[80%] w-[80%]" />
            </Button>

            <Button
                href="https://www.credly.com/badges/1629e619-d9e8-4927-a357-eb18491e8985/public_url"
                {...sharedProps}
            >
                <FaAws className="mx-auto h-[80%] w-[80%]" />
            </Button>
        </Div>
    );
};
