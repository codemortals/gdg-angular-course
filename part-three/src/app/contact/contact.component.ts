import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(
    private forms: FormBuilder,
  ) { }

  ngOnInit() {

    this.contactForm = this.forms.group({
      name: [],
      email: [],
      phone: [],
      reason: [],
      message: [],
    });

  }

  public sendMessage(): void {
    console.log(this.contactForm.getRawValue());
  }

}
