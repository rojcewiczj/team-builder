import React, { useState } from "react";

const teamMemberForm =props => {
    const [form, setForm] = useState({name: '', email: '', role: ''})
    const changeHandler = event => {
        console.log(event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const submitMember = event => {
        event.preventDefault();
        
    }
}





export default teamMemberForm;