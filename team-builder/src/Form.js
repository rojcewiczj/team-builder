import React, {useState, useEffect} from 'react';
import App from './App';

const TeamMemberForm = props => {
  
    const [form, setForm] = useState({ name: '', email: '', role: ''});
    const changeHandler = event => {
        console.log(event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    const submitMember = event => {
        event.preventDefault();
        const newMember = {
            ...form,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setForm({name: '', email:'', role: ''});

    };
  
    return (
        <form onSubmit={submitMember}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Members Name"
              value={form.name}
              onChange={changeHandler}
              />
             <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              placeholder="Members role"
              value={form.role}
              onChange={changeHandler}
              />
             <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Members email"
              value={form.email}
              onChange={changeHandler}
              />
              <button type ="submit">Join The Team!</button>

        </form>
    )
}

export default TeamMemberForm;