import { Component, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {

  globalGroupName = '';
  globalGroupNameInput = '';

  constructor(public usersService: UsersService){}

  ngOnInit(): void {
    this.globalGroupName = this.usersService.getGroupName();
  }
  editGroupName(): void {
    this.usersService.updateGroupName(this.globalGroupNameInput);
    this.globalGroupName = this.usersService.getGroupName();
  }
    @ViewChild('popUp', { read: ViewContainerRef })
      private viewRef!: ViewContainerRef
      private componentRef!: ComponentRef<PopUpComponent>
  
  showPopUp(){
    this.componentRef = this.viewRef.createComponent(PopUpComponent); 
    this.componentRef.instance.members = this.usersService.users.length;
    this.componentRef.instance.name = this.usersService.getGroupName();
    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}
