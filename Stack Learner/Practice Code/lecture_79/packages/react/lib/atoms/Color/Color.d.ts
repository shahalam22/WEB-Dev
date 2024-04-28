import React from 'react';
import Spaces from '@lecture_79/foundation/lib/Spacing';
import '@lecture_79/scss/lib/Utilities.css';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spaces;
    height?: keyof typeof Spaces;
}
declare const Color: React.FC<ColorProps>;
export default Color;
