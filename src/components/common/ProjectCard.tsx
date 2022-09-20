import { Button, Section } from '@components/common';
import type { BasePropsWithThemeAndVariant } from 'types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export const ProjectCard = (
    props: BasePropsWithThemeAndVariant & {
        title: string;
        description: string;
        path: string;
        className?: string;
    }
) => {
    const { title, description, path, className, ...rest } = props;
    return (
        <Section
            variant="dark"
            className={clsx(
                'rounded-md v-stack space-y-3 w-80 px-10 py-5',
                className
            )}
            {...rest}
        >
            <h3>{title}</h3>
            <p>{description}</p>

            <Link href={`/projects/${path}`}>
                <Button
                    bgColor="transparent"
                    borderColor="primary"
                    textColor="light"
                >
                    View Project
                </Button>
            </Link>
        </Section>
    );
};
