import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductComponent]
})
export class AppComponent {
  title = 'api-with-angular';

  changeTitle() {
    this.title = 'changed';
  }
}
