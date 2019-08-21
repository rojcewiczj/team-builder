import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from "./MemberCard";
import TeamMemberForm from './Form';
import team from "./TeamMembers"
function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  const addNewMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember]);
  }
  const [membersToEdit, setMemberstoEdit]= useState(team)
  const editTeamMember = memberToEdit => {
    setMemberstoEdit([...membersToEdit, memberToEdit]);
  }

  return (
    <div className="App">
      <h1>My Team Members!</h1>
      <TeamMemberForm  addNewMember={addNewMember}/>
      <div>
     
      <Cards memberCard={teamMembers} editTeamMember={editTeamMember} />
      </div>
    </div>
  );
}

export default App;
