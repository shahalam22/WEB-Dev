import { useState } from "react";
import { isObjEmpty, deepClone } from "../utils/object-utils";

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
        const {name: key, value, type, checked} = e.target;

        const oldState = deepClone(state);

        if(type === 'checkbox'){
            oldState[key].value = checked;
        }else{
            oldState[key].value = value;
        }

        // oldState[key].value = value;
        
        const { errors } = getErrors();

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

        const { errors } = getErrors();

        const oldState = deepClone(state);

        if(oldState[key].touched && errors[key]){
            oldState[key].error = errors[key];
        }else{
            oldState[key].error = '';
        }

        oldState[key].focused = false;

        setState(oldState);
    };

    const handleSubmit = (e, cb) => {
        e.preventDefault();
        const {hasError, errors, values} =  getErrors();
        cb({
            hasError,
            errors,
            values,
            touched: mapStateToKeys(state, 'touched'),
            focused: mapStateToKeys(state, 'focused'),
        })
        
        if(!hasError){
            console.log(state);
        }else{
            const oldState = deepClone(state);
            Object.keys(errors).forEach((key)=>{
                oldState[key].error = errors[key];
            })

            setState(oldState);
        }
    }

    const clear = () => {
        const newState = mapValuesToState(init, true);
        setState(newState);
    }

    const getErrors = () => {
        let hasError = null, errors = null;

        const values = mapStateToKeys(state, 'value');

        if(typeof validate === 'boolean'){
            hasError = validate;
            errors = mapStateToKeys(state, 'error');
        }else if(typeof validate === 'function'){
            const errorsFromCB = validate(values);
            hasError = !isObjEmpty(errorsFromCB);
            errors = errorsFromCB
        }else{
            throw new Error('validate must be a boolean or a function');
        }

        return {
            values,
            errors,
            hasError,
        }
    }

    return {
        formState: state,
        handleChange,
        handleFocused,
        handleBlur,
        handleSubmit,
        clear,
    };
};

export default useForm;

// Helper Functions
const mapValuesToState = (values, shouldClear = false) => {
    return Object.keys(values).reduce((acc, key)=>{
        acc[key] ={
            value: shouldClear ? '' : values[key],
            error: '',
            focused: false,
            touched: false,
        }
        return acc;
    }, {})
}

const mapStateToKeys = (state, key) => {
    return Object.keys(state).reduce((acc, cur)=>{
        acc[cur] = state[cur][key];
        return acc;
    }, {});
};
