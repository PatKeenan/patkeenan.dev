import * as React from 'react';

export function useIsInViewport(
    ref: React.MutableRefObject<HTMLDivElement | null>
) {
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => {
                const entry = e;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );
        if (ref && ref.current) {
            observer.observe(ref.current);
        }
    }, [ref]);

    return isVisible;
}
