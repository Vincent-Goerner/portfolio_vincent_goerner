import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})

export class ReferencesComponent {
  translatedData = inject(TranslationService);
  references = [
    {
      autor: 'M. Marrocu - Frontend Developer',
      feedback: this.translatedData.translate[this.translatedData.selectedLanguage].REFERENCES.REF1,
      highlighted: false,
    },
    {
      autor: 'T. Schulz - Team Partner',
      feedback: this.translatedData.translate[this.translatedData.selectedLanguage].REFERENCES.REF2,
      highlighted: false,
    },
    {
      autor: 'J. Janisch - Team Partner',
      feedback: this.translatedData.translate[this.translatedData.selectedLanguage].REFERENCES.REF3,
      highlighted: false,
    }
  ];
  isHighlighted: number = 0;
  sliderLeft = false;
  sliderRight = false;
  sliderCenter = false;

  constructor() {
    setInterval (() => {
      this.setLanguage(); 
    }, 100);
    this.moveSlider();
    this.highlightFeedback();  
  }

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  setLanguage() {
      this.references[0].feedback = this.setPath().REFERENCES.REF1;
      this.references[1].feedback = this.setPath().REFERENCES.REF2;
      this.references[2].feedback = this.setPath().REFERENCES.REF3;
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
