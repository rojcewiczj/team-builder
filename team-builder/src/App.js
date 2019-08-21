import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./MemberCard";
import teamMemberForm from './Form';
import team from "./TeamMembers"
function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  const addNewMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  }
  return (
    <div className="App">
      <h1>My Team Members!</h1>
      <teamMemberForm />
    </div>
  );
}

export default App;
