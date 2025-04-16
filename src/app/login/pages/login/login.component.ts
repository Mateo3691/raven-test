import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoadFormsService } from '../../../core/services/load-forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  failedLogin: boolean = false

  constructor(private loadFormService: LoadFormsService,
              private authService: AuthService,
              private router: Router) { }

  get formIsValid(): boolean {
    return this.loginForm?.valid || false;
  }

  ngOnInit(): void {
    this.loginForm = this.loadFormService.createLoginForm();
  }

  loginPerson(): void {
    const body = this.loginForm?.value;
    this.authService.login(body).subscribe((res) => {
      this.failedLogin = !res;
      if(res)
        this.router.navigate(['/dashboard'])
    })
  }

}
