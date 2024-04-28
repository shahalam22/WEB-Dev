import React from 'react';
import '@lecture_79/scss/lib/Select.css';
interface SelectOption {
    label: string;
    value: string;
}
interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object;
}
interface SelectProps {
    label?: string;
    options?: Array<SelectOption>;
    onOptionSelected?: (option?: SelectOption, optionIndex?: number) => {};
    renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;
