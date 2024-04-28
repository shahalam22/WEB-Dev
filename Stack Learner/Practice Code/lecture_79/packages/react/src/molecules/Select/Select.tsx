import React, { KeyboardEventHandler, useEffect, useLayoutEffect, useRef, useState } from 'react';
import '@lecture_79/scss/lib/Select.css';
import Text from '../../atoms/Text';
// import { OverrideProps } from '@mui/material/OverridableComponent';
// import '@lecture_79/scss/lib/Utilities.css';

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

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    ESC: 27,
}

const getNextOptionIndex = (
    currentIndex: number | null,
    options: Array<SelectOption>,
) => {
    
    // console.log(options.length);
    

    if(currentIndex === null){
        return 0;
    }else if(currentIndex === options.length - 1){
        return 0;
    }else{
        return currentIndex + 1;
    }
}

const getPreviousOptionIndex = (
    currentIndex: number | null,
    options: Array<SelectOption>,
) => {
    if(currentIndex === null){
        return 0;
    }else if(currentIndex === 0){
        return options.length - 1;
    }else{
        return currentIndex - 1;
    }
}


const Select: React.FC<SelectProps> = ({
    label='Please select an option', 
    options = [], 
    onOptionSelected,
    renderOption
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(0);
    const [optionRefs, setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([]);
    
    // console.log('options', options);


    const labelRef = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10)
    }, [labelRef.current?.offsetHeight]);

    useLayoutEffect(() => {
        if(highlightedIndex !== null && isOpen){
            const ref = optionRefs[highlightedIndex];
            // console.log(ref);
            // console.log(ref.current);
            
            // console.log(highlightedIndex);
            
            if(ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex])

    useEffect(() => {
        setOptionRefs(options.map(() => React.createRef<HTMLLIElement>()))
    }, [options.length])

    const handleClick = () => {
        setIsOpen(!isOpen);
        // highlightItem(0);
        // console.log(highlightedIndex);
        
    }

    const handleOptionClick = (option: SelectOption, index: number) => {
        if(onOptionSelected) {
            onOptionSelected(option, index);
        }
        setSelectedOption(index);
        setIsOpen(false);
    }
    
    const onButtonKeyDown: KeyboardEventHandler = (event) => {
        event.preventDefault();
        if([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);
            // highlightItem(0);
            // console.log(highlightedIndex);
        }
    }
    
    const onOptionKeyDown: KeyboardEventHandler = (event) => {
        // handle ESC key
        if(event.keyCode === KEY_CODES.ESC){
            setIsOpen(false);
            return;
        }

        // handle down key
        if(event.keyCode === KEY_CODES.DOWN_ARROW){
            highlightItem(getNextOptionIndex(highlightedIndex, options));
            // console.log(options);
            // console.log(highlightedIndex);
        }

        // handle up key
        if(event.keyCode === KEY_CODES.UP_ARROW){
            highlightItem(getPreviousOptionIndex(highlightedIndex, options));
            // console.log(options);
            // console.log(highlightedIndex);
        }

        //handle enter key
        if(event.keyCode === KEY_CODES.ENTER){
            handleOptionClick(options[highlightedIndex!], highlightedIndex!)
        }
    }

    const highlightItem = (optionIndex: number | null) => {
        setHighlightedIndex(optionIndex)
    }
    


    let selectedValue = null;
    if(selectedOption !== null) {
        selectedValue = options[selectedOption].label;
    }

    return <div className='dse-select'>
        <button 
            ref={labelRef} 
            className='dse-select__label' 
            onClick={handleClick}
            onKeyDown={onButtonKeyDown}
            aria-haspopup={true}
            aria-expanded={isOpen ? true : undefined}
            aria-controls='dse-select-list'
        >
            <Text>
                {selectedValue === null ? label : selectedValue}
            </Text>
            <span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'}`}
                    width={"1rem"}
                    height={"1rem"}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </span>
        </button>
        {
            isOpen && (
                <ul role='menu' id='dse-select-list' className='dse-select__overlay' style={{top: overlayTop}}>
                    {options.map((option, index)=>{
                        const isSelected = selectedOption === index;
                        const isHighlighted = highlightedIndex === index;

                        const ref = optionRefs[index]

                        const renderOptionProps: RenderOptionProps = {
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

                        if(renderOption){
                            return renderOption(renderOptionProps);
                        }

                        return (
                            <li 
                                {...renderOptionProps.getOptionRecommendedProps()}
                            >
                                <Text>{option.label}</Text>
                                {
                                    isSelected && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width={"1rem"} height={"1rem"}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    )
                                }
                            </li>
                        )
                    })}
                </ul>
            )
        }
    </div>
};

export default Select;