import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'

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
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)

  })

  sendForm() {
    console.log(this.favouriteFramework)
  }

  handleContactFormSubmit() {
    console.log(this.contactForm.value)
  }

}
