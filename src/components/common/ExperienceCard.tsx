import {
    Article,
    ContainerPropTypes,
    Div,
    Figure,
    Header,
    Li,
    Ul,
} from '@components/common';
import Image from 'next/image';

import type { IconType } from 'react-icons';

export type ExperienceCardProps = {
    logoImagePath: string;
    title: string;
    role: string;
    dates: string;
    icons?: IconType[];
    responsibilities: string[];
} & ContainerPropTypes<'section'>;

export const ExperienceCard = (props: ExperienceCardProps) => {
    const {
        logoImagePath,
        title,
        role,
        responsibilities,
        icons,
        dates,
        ...rest
    } = props;
    return (
        <Article
            {...rest}
            borderColor="primary"
            className="text-center v-stack w-[90%] md:w-[450px] space-y-2 flex-grow rounded-md flex-shrink-0 snap-center border-4 py-4 md:py-8 overflow-y-hidden"
        >
            <Header>
                <Figure className="h-[75px] w-[75px] md:h-[100px] md:w-[100px] mx-auto relative justify-center">
                    <Image
                        priority
                        src={logoImagePath}
                        alt="Patrick Keenan"
                        height={100}
                        width={100}
                        layout="responsive"
                        className="rounded-full object-cover"
                    />
                </Figure>
                <Div className="v-stack justify-center space-y-1 md:space-y-2  mt-1 md:mt-4">
                    <h4 className="text-xl md:text-3xl font-bold tracking-wide text-light">
                        {title}
                    </h4>

                    <div className="h-stack space-x-4 items-center justify-center text-light-accent text-xs md:text-sm">
                        <p className="tracking-wide uppercase">{role}</p>
                        <p className="text-sm text-success font-semibold">
                            {dates}
                        </p>
                    </div>

                    <Div textColor="primary">
                        <Ul
                            className="h-stack space-x-2 justify-center"
                            textColor="primary"
                        >
                            {icons?.map((Icon, index) => (
                                <Li
                                    key={index}
                                    bgColor="transparent"
                                    className="h-8 w-8 flex items-center"
                                >
                                    <Icon className="mx-auto h-[80%] w-[80%]" />
                                </Li>
                            ))}
                        </Ul>
                    </Div>
                </Div>
            </Header>
            <Ul className="text-left list-disc px-6 space-y-2">
                {responsibilities.map((item, index) => (
                    <Li
                        key={index}
                        className="list-item tracking-wide text-sm md:text-base"
                    >
                        {item}
                    </Li>
                ))}
            </Ul>
        </Article>
    );
};
