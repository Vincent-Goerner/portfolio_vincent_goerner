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
  mailTest = true;
  submitFail = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) { // wenn das Project lokal gehostet wird kommt ein Fehler und das MUSS so sein
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest || ngForm.submitted && ngForm.form.valid && !this.contactData.checkbox) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.submitFail = true;
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.contactData.checkbox) {
      
      ngForm.resetForm();
      this.submitForm(ngForm);
    }
  }

  submitForm(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  toggleCheckbox() {
    this.contactData.checkbox = !this.contactData.checkbox;
    if (!this.contactData.checkbox) {
      this.submitFail = true;
    } else {
      this.submitFail = false;
    }
  }

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  openPrivacyPolicy() {
    this.router.navigateByUrl('privacy-policy');
    setTimeout(() => {
      this.scrollToTop();
    }, 100);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
    })
  }
}
