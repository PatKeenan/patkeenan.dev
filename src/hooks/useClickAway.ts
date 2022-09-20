import React from 'react';

/**
 *
 * Attach the ref to a wrapping div in order to still have access to the contents inside without it closing
 *
 */

export const useClickAway = () => {
    const [active, setActive] = React.useState<boolean>(false);

    const ref = React.useRef<HTMLDivElement | null>(null);

    const handleToggle = () => setActive(!active);

    const handleDocumentClick = (e: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node))
            setActive(false);
    };

    React.useEffect(() => {
        if (active) {
            return document.addEventListener('mousedown', handleDocumentClick);
        }

        document.removeEventListener('mousedown', handleDocumentClick);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, [active]);

    return { ref, handleToggle, active, setActive };
};
