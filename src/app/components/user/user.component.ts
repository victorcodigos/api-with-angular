import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenDirOptions } from 'fs';
import { OperatingSystem } from '../../interfaces/operating-system';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = ""; 
  @Output() greet: EventEmitter<string> = new EventEmitter<string>()
  username: string = "Victor" ;
  doesUserExists: boolean = false;
  operationsSystems: OperatingSystem [] = [{id: 1, name: 'Windows'}, {id: 2, name: 'Linux'}, {id: 3, name: 'Mac'}];
  isEditable: boolean = true;

  onMouseOver (osName: string): void {
    console.log(osName)
  }

  emitToParent(): void {
    this.greet.emit('Hi! I am your child')
  }

}

