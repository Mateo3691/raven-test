import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
