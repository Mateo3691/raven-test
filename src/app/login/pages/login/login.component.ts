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

  ngOnInit(): void {
    this.loginForm = this.loadFormService.createLoginForm();
    console.log(this.loginForm);
  }

}
