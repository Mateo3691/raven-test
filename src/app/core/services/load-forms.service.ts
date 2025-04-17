import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoadFormsService {

  constructor(private fb: FormBuilder) { }

  /**
   * Metodo que crea el formulario de login
   * @returns FormGroup
   */
  createLoginForm(): FormGroup{
    return this.fb.group({
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
