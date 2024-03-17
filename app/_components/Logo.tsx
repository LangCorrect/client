import React from 'react';

interface Props {
    color?: string;
    height?: number;
    width?: number;
}

const defaultColor = '#6174dd';
const defaultSize = 40;

export default function Logo({
    color = defaultColor,
    height = defaultSize,
    width = defaultSize,
}: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103.7505 79.9878"
            height={height}
            width={width}
        >
            <g id="full-rgb">
                <g id="logoMark">
                    <path
                        id="logoMark_PathItem_"
                        data-name="logoMark &lt;PathItem&gt;"
                        d="M41.7633,40.6185h0a1.4464,1.4464,0,0,0,2.0454,0l8.5174-8.5173a1.4241,1.4241,0,0,0,0-2.0138h0a1.494,1.494,0,0,0-2.1126,0l-8.45,8.45A1.4715,1.4715,0,0,0,41.7633,40.6185Z"
                        style={{ fill: color }}
                    />
                    <path
                        id="logoMark_PathItem_2"
                        data-name="logoMark &lt;PathItem&gt;"
                        d="M46.606,45.4611h0a1.4464,1.4464,0,0,0,2.0454,0l8.5173-8.5173a1.4238,1.4238,0,0,0,0-2.0137h0a1.4938,1.4938,0,0,0-2.1126,0l-8.45,8.45A1.4713,1.4713,0,0,0,46.606,45.4611Z"
                        style={{ fill: color }}
                    />
                    <path
                        id="logoMark_PathItem_3"
                        data-name="logoMark &lt;PathItem&gt;"
                        d="M51.459,50.3141h0a1.4462,1.4462,0,0,0,2.0454,0l8.5173-8.5173a1.4238,1.4238,0,0,0,0-2.0137h0a1.4938,1.4938,0,0,0-2.1126,0l-8.45,8.45A1.4715,1.4715,0,0,0,51.459,50.3141Z"
                        style={{ fill: color }}
                    />
                    <path
                        id="logoMark_PathItem_4"
                        data-name="logoMark &lt;PathItem&gt;"
                        d="M24.783,42.457l36.51,36.51a3.4838,3.4838,0,0,0,4.9268,0l36.51-36.51a3.4838,3.4838,0,0,0,0-4.9268L66.22,1.02a3.4838,3.4838,0,0,0-4.9268,0L53.71,8.6035l4.95,4.95,4.15-4.15a1.3379,1.3379,0,0,1,1.8921,0L94.3472,39.0475a1.338,1.338,0,0,1,0,1.8922L64.7029,70.584a1.3379,1.3379,0,0,1-1.8921,0L33.1665,40.94a1.3378,1.3378,0,0,1,0-1.8922L50.05,22.1642,45.1,17.2136,24.783,37.53A3.4838,3.4838,0,0,0,24.783,42.457Z"
                        style={{ fill: color }}
                    />
                    <path
                        id="logoMark_PathItem_5"
                        data-name="logoMark &lt;PathItem&gt;"
                        d="M78.9674,37.53,42.457,1.02a3.4838,3.4838,0,0,0-4.9268,0L1.02,37.53a3.4838,3.4838,0,0,0,0,4.9268l36.51,36.51a3.4838,3.4838,0,0,0,4.9269,0l7.6-7.6006-4.95-4.9506L40.94,70.5835a1.3379,1.3379,0,0,1-1.8921,0L9.4038,40.94a1.338,1.338,0,0,1,0-1.8922L39.0475,9.4038a1.338,1.338,0,0,1,1.8922,0L70.5835,39.0476a1.3379,1.3379,0,0,1,0,1.8921L53.7178,57.8059l4.95,4.9507,20.3-20.3A3.4838,3.4838,0,0,0,78.9674,37.53Z"
                        style={{ fill: color }}
                    />
                </g>
            </g>
        </svg>
    );
}
