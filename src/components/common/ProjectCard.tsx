import {
    Article,
    Button,
    Div,
    Figure,
    Footer,
    Header,
    Section,
} from '@components/common';
import type { BasePropsWithThemeAndVariant } from 'types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const ProjectCard = (
    props: BasePropsWithThemeAndVariant & {
        title: string;
        imagePath: string;
        description: string;
        href: string;
        className?: string;
        reverse?: boolean;
    }
) => {
    const {
        title,
        description,
        href,
        className,
        variant,
        imagePath,
        reverse,
        ...rest
    } = props;

    const sectionProps = { variant, ...rest };

    return (
        <Section
            className={clsx('w-full py-5 flex-shrink-0', className)}
            {...sectionProps}
        >
            <Div
                className={clsx(
                    reverse && 'lg:flex-row-reverse',
                    'v-stack lg:h-stack lg:gap-4 flex-shrink-0 max-w-6xl mx-auto'
                )}
                padding="primary-x"
            >
                <Figure className="w-full lg:w-1/2 justify-center flex items-center">
                    <Div className="h-auto w-full max-w-[600px] md:w-full mx-auto">
                        <Image
                            priority
                            src={imagePath}
                            alt="Patrick Keenan"
                            height={150}
                            width={200}
                            layout="responsive"
                            className="object-contain"
                        />
                    </Div>
                </Figure>
                <Article className="text-center lg:text-left w-full lg:w-1/2 justify-center v-stack space-y-4 mx-auto max-w-prose">
                    <Header>
                        <h3 className="tracking-wider text-2xl md:text-3xl font-semibold">
                            {title}
                        </h3>
                    </Header>
                    <Div>
                        <p>{description}</p>
                    </Div>
                    <Footer>
                        <Link href={`/projects/${href}`}>
                            <Button
                                variant={variant == 'dark' ? 'primary' : 'dark'}
                            >
                                View Project
                            </Button>
                        </Link>
                    </Footer>
                </Article>
            </Div>
        </Section>
    );
};
