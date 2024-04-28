import React from 'react';
import '@lecture_79/scss/lib/button.css';

// interface works same as proptypes in javascript but here we don't need to install interface as we install proptypes in javascript. This is builtin feature of typescript.
interface ButtonProps {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onClick, children}) => {
    return <button className='btn btn-primary' title={title} onClick={onClick}>
        {children}
    </button>;
};

export default Button;