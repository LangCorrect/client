import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    primary: '#6174dd',
                },
            },
            {
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    primary: '#6174dd',
                },
            },
            'dracula',
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
export default config;
