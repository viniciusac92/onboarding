import { SVGProps } from 'react';

export function InfoNoCircle(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            className="lucide lucide-info"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="3"
            stroke="#495AFF"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Longer vertical line: from (12,18) to (12,10) */}
            <line x1="12" y1="18" x2="12" y2="12" />
            {/* Dot at (12,6), you can move it up/down as you like */}
            <line x1="12" y1="7" x2="12.01" y2="7" />
        </svg>
    );
}
