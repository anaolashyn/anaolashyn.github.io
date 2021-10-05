import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = 'Portfolio';
  contactForm: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendForm(): void {
    const dataToSend = this.contactForm.value;
    emailjs.send('contact_form', 'contact_form', dataToSend, 'user_yk7Y42yFUntaSoJwZaDfj')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.contactForm.reset();
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
}
