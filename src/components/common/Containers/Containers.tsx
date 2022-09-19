import type { BaseContainerProps } from '@types';
import { AnimatePresence, HTMLMotionProps } from 'framer-motion';

import { getStylesFromProps, getStylesFromVariant } from '@utils/theme';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const ElementContainer = ({
    className,
    ...props
}: BaseContainerProps & {
    className?: string;
}) => {
    const {
        as = 'div',
        variant,
        fill = 'contained',
        bgColor,
        borderColor,
        fontSize,
        textColor,
        outlineColor,
        ...rest
    } = props;
    const HtmlTag = motion[as];

    const containerStyles = getStylesFromProps({
        bgColor,
        borderColor,
        textColor,
        outlineColor,
    });

    return (
        <AnimatePresence>
            <HtmlTag
                {...rest}
                className={clsx(
                    variant && getStylesFromVariant(variant, fill),
                    variant && variant !== 'none' && 'border',
                    className,
                    containerStyles
                )}
            />
        </AnimatePresence>
    );
};

export const Section = (
    props: BaseContainerProps & HTMLMotionProps<'section'>
) => {
    return (
        <ElementContainer
            as="section"
            {...props}
        />
    );
};
export const Div = (props: BaseContainerProps & HTMLMotionProps<'div'>) => {
    return (
        <ElementContainer
            as="div"
            {...props}
        />
    );
};

export const Article = (
    props: BaseContainerProps & HTMLMotionProps<'article'>
) => {
    return (
        <ElementContainer
            as="article"
            {...props}
        />
    );
};

export const Nav = (props: BaseContainerProps & HTMLMotionProps<'nav'>) => {
    return (
        <ElementContainer
            as="nav"
            {...props}
        />
    );
};

export const Ul = (props: BaseContainerProps & HTMLMotionProps<'ul'>) => {
    return (
        <ElementContainer
            as="ul"
            {...props}
        />
    );
};
export const Li = (props: BaseContainerProps & HTMLMotionProps<'li'>) => {
    return (
        <ElementContainer
            as="li"
            {...props}
        />
    );
};
