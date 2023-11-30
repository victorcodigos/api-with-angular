import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  favouriteFramework: string = '';
  contactForm = new FormGroup ({
    name: new FormControl(''),
    email: new FormControl('')

  })

  sendForm() {
    console.log(this.favouriteFramework)
  }

  handleContactFormSubmit() {
    console.log(this.contactForm.value)
  }

}
