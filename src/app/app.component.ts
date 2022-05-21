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

  addMember() {
    if(!this.newMemberName) {
      this.errorMessage = "Name cannot be empty.";
      return;
    };

    this.members.push(this.newMemberName);
    this.newMemberName = "";
  };

  handleInputChange(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
}
