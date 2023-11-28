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
  operationsSystems = [{id: 'win', name: 'Windows'}, {id: 'lost', name: 'Linux'}, {id: 'half', name: 'Mac'}];

}
