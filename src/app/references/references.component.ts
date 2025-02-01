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
      feedback: 'Vincent has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      highlighted: false
    },
    {
      autor: 'T. Schulz - Team Partner',
      feedback: 'Our project benefited enormously from Vincent efficient way of working.',
      highlighted: false
    },
    {
      autor: 'J. Janisch - Team Partner',
      feedback: 'Working with Vincent was really good and effectily. His knowledge is impressiv and his kind to think always useful.',
      highlighted: false
    }
  ];
  isHighlighted: number = 1;

  constructor() {
    this.highlightFeedback();
  }

  highlightFeedback() {    
    for (let index = 0; index < this.references.length -1; index++) {
      if (index == this.isHighlighted) {
        this.references[this.isHighlighted].highlighted = true;        
      } else {
        this.references[this.isHighlighted].highlighted = false;
      }
    }
  }

  setHighlight(next: string) {
    if (next == '-') {
      if (this.isHighlighted > 0) {
        this.isHighlighted--;
      } else {
        this.isHighlighted = this.references.length - 1;
      }
    }
    if (next == '+') {
      if (this.isHighlighted < this.references.length - 1) {
        this.isHighlighted++;
      } else {
        this.isHighlighted = 0;
      }
    }
    this.highlightFeedback();
    
  }
}
