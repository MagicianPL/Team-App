import { Component } from '@angular/core';

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
    if(!this.numOfTeams.trim()) return this.errorMessage = "Number of teams cannot be empty!";
    if(+this.numOfTeams > this.members.length) return this.errorMessage = "Number of teams is too big.";

    
  };
}
