import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { ApiMethod } from 'src/shared/enum';
import {UserService } from './../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private snackbar: MatSnackBar, private apiService: UserService) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_@./#&+-\\s\\S]{1,150}')]],
      email: ['', [Validators.required, Validators.email]],
      textarea: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_@./#&+-\\s\\S]{1,150}')]]
    });
   }


  ngOnInit(): void {

  }

  contactFormsubmit(message: string): void{
    if (this.contactForm.valid){
      this.apiService.send(ApiMethod.Post, 'contacts', this.contactForm.value).subscribe();
      const snackbarRef = this.snackbar.open(message, null, {duration: 2000});
    }
  }

  get contact(): any{
    return this.contactForm.controls;
  }


}
