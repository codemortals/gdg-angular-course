import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  public contactForm: FormGroup;
  public notDestroyed = new Subject();

  public isSent = false;
  public hasError = false;

  constructor(
    private forms: FormBuilder,
    private contactService: ContactService
  ) { }

  public ngOnInit(): void {
    this.contactForm = this.forms.group({
      name: [],
      email: [],
      message: []
    });
  }

  public sendMessage(): void {
    this.isSent = false;
    this.hasError = false;

    this.contactService
      .sendMessage(this.contactForm.getRawValue())
      .pipe(takeUntil(this.notDestroyed))
      .subscribe(
        (response) => {
          this.contactForm.reset();
          this.isSent = true;
        },
        (error) => this.hasError = true
      );
  }

  public ngOnDestroy(): void {
    this.notDestroyed.complete();
    this.notDestroyed.next();
  }

}
