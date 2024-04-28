import React from 'react';
import '@lecture_79/scss/lib/button.css';
interface ButtonProps {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
