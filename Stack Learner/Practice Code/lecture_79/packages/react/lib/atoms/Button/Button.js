import React from 'react';
import '@lecture_79/scss/lib/button.css';

const Button = ({ title, onClick, children }) => {
    return React.createElement("button", { className: 'btn btn-primary', title: title, onClick: onClick }, children);
};

export { Button as default };
//# sourceMappingURL=Button.js.map
