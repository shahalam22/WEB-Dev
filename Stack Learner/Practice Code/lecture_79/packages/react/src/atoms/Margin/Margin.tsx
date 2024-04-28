import React from 'react';
import Spaces from '@lecture_79/foundation/lib/Spacing';
import '@lecture_79/scss/lib/Margin.css';

interface MarginProps {
    space?: keyof typeof Spaces;
    children: React.ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({space='md', left, right, top, bottom, children}) => {
    let className = ``;

    if(!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`
    }

    if(left) {className += `dse-margin-left-${space} `}
    if(right) {className += `dse-margin-right-${space} `}
    if(top) {className += `dse-margin-top-${space} `}
    if(bottom) {className += `dse-margin-bottom-${space} `}
    
    return <div className={className}>{children}</div>
}

export default Margin;