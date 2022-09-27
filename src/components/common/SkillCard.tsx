import { Div } from '@components/common';
import * as React from 'react';
import clsx from 'clsx';

import type { IconType } from 'react-icons';
import type { ContainerPropTypes } from './Containers';

type SkillCardProps = {
    title: string;
    icon: IconType;
    level: string;
} & ContainerPropTypes<'div'>;
export const SkillCard = (props: SkillCardProps) => {
    const { title, icon: Icon, level, transition, className, ...rest } = props;
    return (
        <Div className="v-stack justify-center w-24 md:w-40 text-center text-xl group cursor-default mx-auto space-y-2 my-2 md:my-0">
            <Icon className="w-8 h-8 md:w-12:d md:h-12 mx-auto text-light-accent group-hover:text-light" />
            <div>{title}</div>
            <div className="h-stack space-x-2 w-full">
                <div className="w-full h-2 rounded-lg  bg-light-accent/40 relative flex align-middle">
                    <Div
                        transition={{
                            ...transition,
                            type: 'tween',
                            duration: 0.75,
                        }}
                        exit={{ width: 0 }}
                        style={{ width: 0 }}
                        className={clsx(
                            className,
                            `h-2 rounded-lg bg-primary absolute left-0  group-hover:bg-green-400 align-middle`
                        )}
                        {...rest}
                    >
                        <div className="w-full h-full relative">
                            <div className="group-hover:h-4  h-2 absolute w-1 bg-light/50 group-hover:bg-light right-0" />
                            <small className="absolute top-3 -right-[1.3rem] items-center hidden group-hover:flex">
                                {level}
                            </small>
                        </div>
                    </Div>
                </div>
            </div>
        </Div>
    );
};
