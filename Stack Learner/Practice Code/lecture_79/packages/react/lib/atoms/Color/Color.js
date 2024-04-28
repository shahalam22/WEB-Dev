import React from 'react';
import Spaces from '@lecture_79/foundation/lib/Spacing';
import '@lecture_79/scss/lib/Utilities.css';

const Color = ({ hexCode, width = Spaces.xxxl, height = Spaces.xxxl }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hexCode } });
};

export { Color as default };
//# sourceMappingURL=Color.js.map
