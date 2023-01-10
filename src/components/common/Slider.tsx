import { scrollThumbColorOptions } from '@utils/theme';
import { Div } from '@components/common';
import clsx from 'clsx';

import type { ContainerPropTypes } from '@components/common';

interface SliderPropsType extends ContainerPropTypes<'section'> {
    snap?: boolean;
}

export const Slider = (props: SliderPropsType) => {
    const {
        snap = true,
        scrollThumbColor = 'primary',
        className,
        ...rest
    } = props;
    return (
        <Div
            fullWidth={false}
            className={clsx(
                className,
                scrollThumbColor && scrollThumbColorOptions[scrollThumbColor],
                'flex flex-col  md:flex-row overflow-x-scroll scrollbar-thin '
            )}
            {...rest}
        />
    );
};
