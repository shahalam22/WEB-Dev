import { useState } from "react";

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {Object | boolean} validate
 * 
 * create forms using this useForm hook easily
 * @param {Param} param
 * @returns
 */

const useForm = ({init, validate}) => {
    const [state, setState] = useState(mapValuesToState(init));

    const handleChange = (e) => {
        const {name: key, value} = e.target;

        const oldState = deepClone(state);
        oldState[key].value = value;
        
        const values = mapStateToValues(oldState);
        const {errors} = checkValidity(values);

        if(oldState[key].touched && errors[key]){
            oldState[key].error = errors[key];
        }else{
            oldState[key].error = '';
        }

        setState(oldState);
    };

    // const handleTouched = (e) => {
    //     const {name: key} = e.target;

    //     const oldState = deepClone(state);
    //     oldState[key].touched = true;
        
    //     setState(oldState);
    // };

    const handleFocused = (e) => {
        const {name: key} = e.target;

        const oldState = deepClone(state);
        oldState[key].focused = true;
        
        if(!oldState[key].touched){
            oldState[key].touched = true;
        }

        setState(oldState);
    };

    const handleBlur = (e) => {
        const key = e.target.name;

        const values = mapStateToValues(state);
        const {errors} = checkValidity(values);

        const oldState = deepClone(state);

        if(oldState[key].touched && errors[key]){
            oldState[key].error = errors[key];
        }else{
            oldState[key].error = '';
        }

        oldState[key].focused = false;

        setState(oldState);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // const values = mapStateToValues(state);
        // const {errors, isValid} = checkValidity(values);

        

        
        if(isValid){
            console.log(state);
        }else{
            const oldState = deepClone(state);
            Object.keys(errors).forEach((key)=>{
                oldState[key].error = errors[key];
            })

            setState(oldState);
        }
    }

    return {
        formState: state,
        handleChange,
        handleFocused,
        handleBlur,
    };
};

export default useForm;

// Helper Functions
const mapValuesToState = (values) => {
    return Object.keys(values).reduce((acc, key)=>{
        acc[key] ={
            value: values[key],
            error: '',
            focused: false,
            touched: false,
        }
        return acc;
    }, {})
}

const mapStateToValues = (state) => {
    return Object.keys(state).reduce((acc, key)=>{
        acc[key] = state[key].value;
        return acc;
    }, {});
};
