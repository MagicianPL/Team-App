import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  errorMessage = "";
  numOfTeams="";
  teams: any = [];

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
    //Validation
    if(!this.numOfTeams.toString().trim()) return this.errorMessage = "Number of teams cannot be empty!";
    if(+this.numOfTeams > this.members.length) return this.errorMessage = "Number of teams is too big.";

    //Push empty arrays to teams
    for(let i = 0; i < +this.numOfTeams; i++) {
      this.teams.push([]);
    };
    //Take random member and push them to the teams
    do {
      for(let i = 0; i < this.teams.length; i++) {
        const randomIndexOfNewMember = Math.floor(Math.random() * this.members.length);
        const removedMember = this.members.splice(randomIndexOfNewMember, 1);
        if(removedMember[0]) {
          this.teams[i].push(removedMember[0]);
        }
      }
    } while(this.members.length > 0);
    return;
  };
}
