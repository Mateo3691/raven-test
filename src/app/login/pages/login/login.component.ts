import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoadFormsService } from '../../../core/services/load-forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(private loadFormService: LoadFormsService) { }

  get formIsValid(): boolean {
    return this.loginForm?.valid || false;
  }

  ngOnInit(): void {
    this.loginForm = this.loadFormService.createLoginForm();
    console.log(this.loginForm);
  }

  loginPerson(): void {
    console.log("loginForm", this.loginForm?.value);
  }

}
