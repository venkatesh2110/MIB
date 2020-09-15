import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  public displayDeveloper = false;
  public displayForm = false;
  careerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private snackbar: MatSnackBar) {
    this.careerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_@./#&+-\\s\\S]{1,150}')]],
      lname: ['', Validators.pattern('[A-Za-z0-9_@./#&+-\\s\\S]{1,150}')],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{1,10}')]],
      state: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_@./#&+-\\s\\S]{1,150}')]],
      city: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_@./#&+-\\s\\S]{1,150}')]],
      zip: [null, [Validators.required, Validators.pattern('[0-9]{1,10}')]]
    });
   }

  ngOnInit(): void {
  }

  displayDeveloperfn(): void{
    this.displayDeveloper = true;
  }

  displayFormfn(): void{
    this.displayForm = true;
  }

  careerFormsubmit(message): void{
    if (this.careerForm.valid){
      const snackbarRef = this.snackbar.open(message, null, {duration: 2000});
    }
  }
  get career(): any{
    return this.careerForm.controls;
  }
}
