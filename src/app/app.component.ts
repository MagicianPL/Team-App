import { Component } from '@angular/core';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
  numOfTeams="";
  teams: string[][] = [];

  addMember() {
    if(!this.newMemberName.trim()) {
      this.errorMessage = "Name cannot be empty.";
      return;
    };
    
    this.errorMessage = "";

    this.members.push(this.newMemberName);
    this.newMemberName = "";
  };

  handleInputChange(member: string) {
    this.newMemberName = member;
  }

  generateTeams() {
    //Clearing
    this.teams = [];

    //Validation
    if(!this.numOfTeams.toString().trim()) return this.errorMessage = "Number of teams cannot be empty!";
    if(+this.numOfTeams > this.members.length) return this.errorMessage = "Number of teams is too big.";
    if(+this.numOfTeams < 1 || !Number.isInteger(+this.numOfTeams)) return this.errorMessage = "Invalid number of teams.";

    //Push empty arrays to teams
    for(let i = 0; i < +this.numOfTeams; i++) {
      this.teams.push([]);
    };
    //Take random member and push them to the teams
    const membersCopy = [...this.members];
    do {
      for(let i = 0; i < this.teams.length; i++) {
        const randomIndexOfNewMember = Math.floor(Math.random() * membersCopy.length);
        const removedMember = membersCopy.splice(randomIndexOfNewMember, 1)[0];
        if(removedMember) {
          this.teams[i].push(removedMember);
        }
      }
    } while(membersCopy.length > 0);

    this.numOfTeams = "";
    this.members = [];
    this.errorMessage = "";
    return;
  };
}
