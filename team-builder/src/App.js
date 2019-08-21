import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import teamMemberForm from './Form';

function App() {
  const [teamMember, setTeamMember] = useState([]);
  return (
    <div className="App">
      <h1>My Team Members!</h1>
      <teamMemberForm />
    </div>
  );
}

export default App;
