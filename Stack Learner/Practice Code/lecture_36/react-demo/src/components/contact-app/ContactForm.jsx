import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
    name: '',
    email: '',
    group: '',
}

const ContactForm = ({getContact}) => {

    const [values, setValues] = useState({...CONTACT_FORM_INIT_STATE});
    const {name, email, group} = values;

    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getContact(values);
        setValues({...CONTACT_FORM_INIT_STATE});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={name} onChange={handleChanges}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={email} onChange={handleChanges}/>
            </div>
            <div>
                <label htmlFor="group">Group: </label>
                <select name="group" id="group" value={group} onChange={handleChanges}>
                    <option value="">Select Group</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                </select>
            </div>
            <input type="submit" value={'Create New Contact'} />
        </form>
    )
}

export default ContactForm;