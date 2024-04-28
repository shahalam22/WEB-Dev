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
declare const Margin: React.FC<MarginProps>;
export default Margin;
