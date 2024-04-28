import React from 'react';
// import  Spaces  from '../../foundations/Spacing';
import Spaces from '@lecture_79/foundation/lib/Spacing';
import '@lecture_79/scss/lib/Utilities.css';

interface ColorProps {
    hexCode: string,
    width?: keyof typeof Spaces,
    height?: keyof typeof Spaces
}

const Color: React.FC<ColorProps> = ({hexCode, width = Spaces.xxxl, height = Spaces.xxxl}) => {
    const className = `dse-width-${width} dse-height-${height}`
    return <div className={className} style={{backgroundColor: hexCode}}></div>
};

export default Color;

