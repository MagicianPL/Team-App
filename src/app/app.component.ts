import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];

  addMember() {
    this.members.push(this.newMemberName);
    this.newMemberName = "";
  };

  handleInputChange(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }
}
