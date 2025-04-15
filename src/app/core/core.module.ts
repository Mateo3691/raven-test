import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { LoadFormsService } from './services/load-forms.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    DataService,
    LoadFormsService,
    AuthGuard
  ]
})
export class CoreModule { }
