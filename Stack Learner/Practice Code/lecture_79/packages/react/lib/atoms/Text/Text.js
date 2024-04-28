import React from 'react';
import '@lecture_79/scss/lib/Text.css';

const Text = ({ size, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
