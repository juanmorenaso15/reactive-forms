import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';

@NgModule({
  declarations: [CreateUserFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateUserFormComponent],
})
export class UserModule {}
