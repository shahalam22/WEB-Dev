import React from 'react';
import FontSize from '@lecture_79/foundation/lib/FontSize';
import '@lecture_79/scss/lib/Text.css';

interface TextProps {
    size?: keyof typeof FontSize,
    children: React.ReactNode
}

const Text: React.FC<TextProps> = ({size, children}) => {
    const className = `dse-text dse-text-${size}`;
    return <p className={className}>{children}</p>;
};

export default Text;