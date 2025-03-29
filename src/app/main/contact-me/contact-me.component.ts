import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})

export class ContactMeComponent {
  translatedData = inject(TranslationService);
  router = inject(Router);
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    checkbox: false,
  }
  mailTest = false;
  submitFail = false;
  submitted = false;

  post = {
    endPoint: 'https://vincentgoerner.com/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
    * Handles form submission. Sends data via HTTP POST if the form is valid and not in test mode.
    * If in test mode, it resets the form without sending data.
    *
    * @param {NgForm} ngForm - The form object containing the form data and status.
    * @returns {void}
    *
    * @note If the project is hosted locally, an error may occur, and this is expected behavior.
  */
  onSubmit(ngForm: NgForm) { // wenn das Project lokal gehostet wird kommt ein Fehler und das MUSS so sein
    let checkbox = <HTMLInputElement> document.getElementById('checkbox');
    if (ngForm.submitted && ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            checkbox.checked = false;
            this.toggleCheckbox();
            this.submitMessage();
          },
          error: (error) => {console.error(error)},
          complete: () => {},
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { // für Testmodus
      ngForm.resetForm();
    }
  }

  validForm (ngForm: NgForm) {
    if (!this.contactData.checkbox) {
      this.submitFail = true;
    } else {
      this.submitFail = false;
      this.onSubmit(ngForm);
    }
  }

  /**
    * Sets the `submitted` property to `true` and resets it to `false` after 2 seconds.
    * 
    * @function submitMessage
    * @returns {void} Does not return anything.
  */
  submitMessage() {
    this.submitted = true;
    setTimeout (() => {
      this.submitted = false;
    }, 5000);
  }

  /**
    * Toggles the checkbox state and sets the submitFail flag accordingly.
    * If the checkbox is unchecked, submitFail is set to true.
    * If the checkbox is checked, submitFail is set to false.
    *
    * @returns {void}
  */
  toggleCheckbox() {
    this.contactData.checkbox = !this.contactData.checkbox;
  }

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path based on the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  /**
    * Navigates to the privacy policy page and scrolls to the top after a short delay.
    *
    * @returns {void}
  */
  openPrivacyPolicy() {
    this.router.navigateByUrl('privacy-policy');
    setTimeout(() => {
      this.scrollToTop();
    }, 100);
  }

  /**
    * Scrolls the window to the top.
    *
    * @returns {void}
  */
  scrollToTop() {
    window.scrollTo({
      top: 0,
    })
  }
}
