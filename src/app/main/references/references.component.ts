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

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  /**
    * Sets the language-specific feedback values for the references.
    * The feedback values are assigned based on the translated data for the selected language.
    *
    * @returns {void}
  */
  setLanguage() {
      this.references[0].feedback = this.setPath().REFERENCES.REF1;
      this.references[1].feedback = this.setPath().REFERENCES.REF2;
      this.references[2].feedback = this.setPath().REFERENCES.REF3;
  }

  /**
    * Highlights the feedback reference based on the current highlight index.
    * Sets the `highlighted` property to true for the reference at the `isHighlighted` index,
    * and false for all other references.
    *
    * @returns {void}
  */
  highlightFeedback() {    
    for (let index = 0; index < this.references.length; index++) {
      if (index == this.isHighlighted) {
        this.references[index].highlighted = true;        
      } else {
        this.references[index].highlighted = false;
      }
    }
  }

  /**
    * Updates the highlighted reference based on the direction provided ('+' or '-').
    * Decreases or increases the `isHighlighted` index, wrapping around the references when necessary.
    * After updating the index, it calls `moveSlider()` and `highlightFeedback()` to apply the changes.
    *
    * @param {string} next - The direction to move the highlight ('+' to move forward, '-' to move backward).
    * @returns {void}
  */
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
      } else {this.isHighlighted = 0;}
    }
    this.moveSlider();
    this.highlightFeedback();
  }

  /**
    * Moves the slider to the correct position based on the highlighted index.
    * It updates the `sliderLeft`, `sliderCenter`, and `sliderRight` properties 
    * to reflect the active position of the slider.
    *
    * @returns {void}
  */
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
