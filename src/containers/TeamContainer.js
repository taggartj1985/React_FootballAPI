import React, {Component, Fragment} from "react";
import TeamSelect from '../components/TeamSelect.js'
import TeamDetails from '../components/TeamDetails.js'

class TeamContainer extends Component{
constructor(props){
  super(props)
    this.state = {
      teams:[],
      selectedTeam: ""

    }
this.handleSelection = this.handleSelection.bind(this)
  }

handleSelection(team){
  this.setState({selectedTeam: team})
}
  componentDidMount(){
    const token = "9b41bcd09c2e4c94baad09aedc40bfc4";
    const url = 'http://api.football-data.org/v2/teams';
    fetch(url, { headers: {'X-Auth-Token': token} })
  .then(response => response.json())
  .then(data => this.setState({teams: data.teams}))
  .catch(err => console.error(err));

  }



render(){

const selectedTeam = this.state.teams.find(team => team.name === this.state.selectedTeam)

  return(
    <>
    <h2>Select a Team</h2>
    <TeamSelect teams={this.state.teams} onSelect={this.handleSelection}></TeamSelect>
    <TeamDetails team={selectedTeam}></TeamDetails>
  </>
)
}
}
export default TeamContainer
