import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';
import { UserComponent } from "../user/user.component";

@Component({
    selector: 'app-blog',
    standalone: true,
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css',
    imports: [CommonModule, CommentsComponent, NgOptimizedImage, UserComponent]
})
export class BlogComponent {
receiveEmision(_$event: string) {
throw new Error('Method not implemented.');
}
userOcuppation: any;

}
