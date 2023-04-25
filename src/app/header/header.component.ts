import { Component } from '@angular/core';
import { UsersService } from '../service/users.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  groupName: string = 'Healthy lifestyle'; 
  groupNameInput: string = ''; 

  constructor(public usersService: UsersService){}

  editGroupName(): void {
    this.usersService.updateGroupName(this.groupNameInput);
    this.groupName = this.groupNameInput;
  }
}
