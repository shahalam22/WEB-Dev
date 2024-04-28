import React from 'react';
import FontSize from '@lecture_79/foundation/lib/FontSize';
import '@lecture_79/scss/lib/Text.css';
interface TextProps {
    size?: keyof typeof FontSize;
    children: React.ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
