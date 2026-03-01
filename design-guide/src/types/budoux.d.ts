import * as React from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'budoux-ja': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            // Add a class attribute so Tailwind classes can be passed
        }
    }
}
