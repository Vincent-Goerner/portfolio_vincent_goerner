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
      autor: 'M. Marrocu - Frontend Developer',
      feedback: 'Vincent is brimming with creativity and always has clever ideas. He is very committed and finds a solution for every problem. With him in the team, things just run smoothly!',
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
  isHighlighted: number = 0;
  sliderLeft = false;
  sliderRight = false;
  sliderCenter = false;

  constructor() {
    this.moveSlider();
    this.highlightFeedback();    
  }

  highlightFeedback() {    
    for (let index = 0; index < this.references.length; index++) {
      if (index == this.isHighlighted) {
        this.references[index].highlighted = true;        
      } else {
        this.references[index].highlighted = false;
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
    this.moveSlider();
    this.highlightFeedback();
  }

  moveSlider() {
    if (this.isHighlighted == 0) {
      this.sliderLeft = true;
      this.sliderCenter = false;
      this.sliderRight = false;
    } else if (this.isHighlighted == 1) {
      this.sliderLeft = false;
      this.sliderCenter = true;
      this.sliderRight = false;
    } else if (this.isHighlighted == 2) {
      this.sliderLeft = false;
      this.sliderCenter = false;
      this.sliderRight = true;
    }
  }
}
