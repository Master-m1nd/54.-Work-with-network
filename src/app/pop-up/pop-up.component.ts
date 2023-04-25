import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
 @Input() members = 0;
 @Input() name = '';
 @Output() close: EventEmitter<void> = new EventEmitter<void>;

 onClose() {
  this.close.emit();
}
}
