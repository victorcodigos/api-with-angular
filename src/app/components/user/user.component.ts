import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-system';
import { OperatingSystemService } from '../../core/operating-systems.service';

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
  operatingSystemService: OperatingSystemService = inject(OperatingSystemService)
  operatingSystems: OperatingSystem[] = this.operatingSystemService.getOperatingSystems();
  username: string = "Victor" ;
  doesUserExists: boolean = false;
  isEditable: boolean = true;

  onMouseOver (osName: string): void {
    console.log(osName)
  }

  emitToParent(): void {
    this.greet.emit('Hi! I am your child')
  }

}

