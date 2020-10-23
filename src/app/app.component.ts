
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  this.form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone:['',[ Validators.required,Validators.pattern('[6-9]\\d{9}')]],
    email: ['',[ Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*\\d)[A-Z\\d^A-Z0-9].{5,}$'),Validators.minLength(9),Validators.maxLength(8)]],

    confirmPassword: ['', Validators.required]
}, {
    validator: ConfirmedValidator('password', 'confirmPassword')
});
}

// convenience getter for easy access to form fields
get f() { return this.form.controls; }

onSubmit() {
this.submitted = true;

// stop here if form is invalid
if (this.form.invalid) {
    return;
}

}
}
