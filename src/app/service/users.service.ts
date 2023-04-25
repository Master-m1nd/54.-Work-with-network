import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private groupName: string = 'Healty lifestyle';
  constructor() { }

  getGroupName(): string {
    return this.groupName;
  }

  updateGroupName(newGroupName: string): void {
    this.groupName = newGroupName;
  }

  users = [
    {name: "Mike", status: "I'm learning angular", url: "https://i.pravatar.cc/150?img=12", id:1,},
    {name: "Nikola", status: "Playing piano", url: "https://i.pravatar.cc/150?img=7", id:2,},
    {name: "Bob", status: "Translations from Chinese", url: "https://i.pravatar.cc/150?img=11", id:3,},
    {name: "Anna ", status: "Pretty girl", url: "https://i.pravatar.cc/150?img=1", id:4,},
];

getUsers() {
  return this.users;
};
}
