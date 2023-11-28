import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CommentsComponent } from "./components/comments/comments.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent, NgOptimizedImage]
})
export class AppComponent {
  userOcuppation: string = "Developer"
  title = 'api-with-angular';
  childsMessage: string = "";

  receiveEmision($event: string): void {
    this.childsMessage = $event;
  }

}
