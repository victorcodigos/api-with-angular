import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = "Victor" ;
  doesUserExists: boolean = false;
  operationsSystems = [{id: 1, name: 'Windows'}, {id: 2, name: 'Linux'}, {id: 3, name: 'Mac'}];
  isEditable: boolean = true;

}
