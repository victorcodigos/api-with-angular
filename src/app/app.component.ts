import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, UserComponent]
})
export class AppComponent {
  userOcuppation: string = "Developer"
  title = 'api-with-angular';
  childsMessage: string = "";

  receiveEmision($event: string): void {
    this.childsMessage = $event;
  }

}
