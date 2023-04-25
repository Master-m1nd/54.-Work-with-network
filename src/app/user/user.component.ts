import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit  {
  @Input() name = '';
  @Input() status = '';
  @Input() img = '';
  groupName = 'Healthy lifestyle';
  groupNameInput = '';
  newName: string = ''; 
  newStatus: string = '';

  constructor(public usersService: UsersService) {}
  ngOnInit(): void {
  
  }
  editName(newName: string): void {
    this.newName = newName;
  }

  editStatus(newStatus: string): void {
    this.newStatus  = newStatus;
  }

  editGroupName(): void {
    this.usersService.updateGroupName(this.groupNameInput);
    this.groupName = this.groupNameInput;
  }
  onNameEdit(): void {
    this.name = this.newName;
    this.newName = '';
  }

  onStatusEdit(): void {
    this.status = this.newStatus;
    this.newStatus = '';
  }
}
