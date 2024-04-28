import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import '@lecture_79/scss/lib/Select.css';
import Text from '../../atoms/Text/Text.js';

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    ESC: 27,
};
const getNextOptionIndex = (currentIndex, options) => {
    // console.log(options.length);
    if (currentIndex === null) {
        return 0;
    }
    else if (currentIndex === options.length - 1) {
        return 0;
    }
    else {
        return currentIndex + 1;
    }
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    else if (currentIndex === 0) {
        return options.length - 1;
    }
    else {
        return currentIndex - 1;
    }
};
const Select = ({ label = 'Please select an option', options = [], onOptionSelected, renderOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [optionRefs, setOptionRefs] = useState([]);
    // console.log('options', options);
    const labelRef = useRef(null);
    useLayoutEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    useLayoutEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            // console.log(ref);
            // console.log(ref.current);
            // console.log(highlightedIndex);
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    useEffect(() => {
        setOptionRefs(options.map(() => React.createRef()));
    }, [options.length]);
    const handleClick = () => {
        setIsOpen(!isOpen);
        // highlightItem(0);
        // console.log(highlightedIndex);
    };
    const handleOptionClick = (option, index) => {
        if (onOptionSelected) {
            onOptionSelected(option, index);
        }
        setSelectedOption(index);
        setIsOpen(false);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
            // highlightItem(0);
            // console.log(highlightedIndex);
        }
    };
    const onOptionKeyDown = (event) => {
        // handle ESC key
        if (event.keyCode === KEY_CODES.ESC) {
            setIsOpen(false);
            return;
        }
        // handle down key
        if (event.keyCode === KEY_CODES.DOWN_ARROW) {
            highlightItem(getNextOptionIndex(highlightedIndex, options));
            // console.log(options);
            // console.log(highlightedIndex);
        }
        // handle up key
        if (event.keyCode === KEY_CODES.UP_ARROW) {
            highlightItem(getPreviousOptionIndex(highlightedIndex, options));
            // console.log(options);
            // console.log(highlightedIndex);
        }
        //handle enter key
        if (event.keyCode === KEY_CODES.ENTER) {
            handleOptionClick(options[highlightedIndex], highlightedIndex);
        }
    };
    const highlightItem = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    let selectedValue = null;
    if (selectedOption !== null) {
        selectedValue = options[selectedOption].label;
    }
    return React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { ref: labelRef, className: 'dse-select__label', onClick: handleClick, onKeyDown: onButtonKeyDown, "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": 'dse-select-list' },
            React.createElement(Text, null, selectedValue === null ? label : selectedValue),
            React.createElement("span", null,
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'}`, width: "1rem", height: "1rem" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" })))),
        isOpen && (React.createElement("ul", { role: 'menu', id: 'dse-select-list', className: 'dse-select__overlay', style: { top: overlayTop } }, options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isHighlighted = highlightedIndex === index;
            const ref = optionRefs[index];
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => ({
                    //here we will define default props
                    key: option.value,
                    className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''} ${isHighlighted ? 'dse-select__option--highlighted' : ''}`,
                    role: 'menuitem',
                    ref,
                    tabIndex: isHighlighted ? -1 : 0,
                    'aria-checked': isSelected ? true : undefined,
                    'aria-label': option.label,
                    onClick: () => handleOptionClick(option, index),
                    onMouseEnter: () => highlightItem(index),
                    onMouseLeave: () => highlightItem(null),
                    onKeyDown: onOptionKeyDown,
                    // here we will spread override props (user given props)
                    ...overrideProps,
                }),
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", width: "1rem", height: "1rem" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" })))));
        }))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
