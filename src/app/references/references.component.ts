import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {
  references = [
    {
      autor: 'A. Fischer - Frontend Developer',
      feedback: 'Vincent has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.'
    },
    {
      autor: 'T. Schulz - Team Partner',
      feedback: 'Our project benefited enormously from Vincent efficient way of working.'
    },
    {
      autor: 'J. Janisch - Team Partner',
      feedback: 'Working with Vincent was really good and effectily. His knowledge is impressiv and his kind to think always useful.'
    }
  ];
}
