import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  checkbox = false;

  constructor() {
    
  }

  toggleCheckbox() {
    this.checkbox = !this.checkbox;
  }
}
