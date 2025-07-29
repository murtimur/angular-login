import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

 @Input() id!: string;
 @Input() label!: string;
 @Input() value!: any;
 @Input() type: string = 'text';
 @Input() help!: any;
 @Input() className!: string;

 @Output() valueChange = new EventEmitter<any>();

 onValueChange(newValue: any) {
  this.value = newValue;
  this.valueChange.emit(newValue);
  this.help = undefined;
  this.className = 'form-control'
 }
 
}
