import React from 'react';

const Circle = props => {
    return (
        <svg version="1.1"
             width="4em" height="4em" viewBox="0 0 100 100" fill={props.fill || '#000'} {...props} >
                <g transform="translate(0,-952.36218)">
                    <path d="m 50,958.36216 c -24.3005,0 -44,19.6996 -44,44.00004 0,24.3004 19.6995,44 44,44 24.3005,0 44,-19.6996 44,-44 0,-24.30044 -19.6995,-44.00004 -44,-44.00004 z" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/>
                </g>
        </svg>
    );
};

export default Circle;
