import clsx from 'clsx';

export const IconLink = (props: React.ComponentProps<'a'>) => {
    const { className, ...htmlProps } = props;
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className={clsx(
                className,
                'inline-flex rounded-md  bg-dark-accent px-3 py-2 hover:text-dark cursor-pointer'
            )}
            {...htmlProps}
        />
    );
};
