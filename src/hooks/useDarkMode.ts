import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const body = document.body;
        const theme = enabled ? 'dark' : 'light';
        body.setAttribute('data-theme', theme);
    }, [enabled]);

    useEffect(() => {
        const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
        const matchLight = window.matchMedia('(prefers-color-scheme: light)');

        const updateTheme = () => {
            if (matchDark.matches) {
                setEnabled(true);
            } else if (matchLight.matches) {
                setEnabled(false);
            }
        };

        updateTheme();
        matchDark.addEventListener('change', updateTheme);
        matchLight.addEventListener('change', updateTheme);

        return () => {
            matchDark.removeEventListener('change', updateTheme);
            matchLight.removeEventListener('change', updateTheme);
        };
    }, []);

    return { enabled, setEnabled };
};

export default useDarkMode;
