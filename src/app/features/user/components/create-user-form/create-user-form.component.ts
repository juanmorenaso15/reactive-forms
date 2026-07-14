import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.scss'],
})
export class CreateUserFormComponent {
  form: FormGroup;
  submitted: boolean = false;
  userData: any = null;
  showPassword: boolean = false;
  passwordStrength: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        username: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9_]+$/),
            this.noSpacesValidator,
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+/,
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        age: [
          '',
          [Validators.required, Validators.min(15), Validators.max(90)],
        ],
        terms: [false, [Validators.requiredTrue]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );

    this.form.get('password')?.valueChanges.subscribe((value: string) => {
      this.updatePasswordStrength(value);
    });
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  noSpacesValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return value.includes(' ') ? { containsSpaces: true } : null;
  }

  updatePasswordStrength(password: string) {
    if (!password) {
      this.passwordStrength = '';
      return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) this.passwordStrength = 'Débil';
    else if (score <= 4) this.passwordStrength = 'Media';
    else this.passwordStrength = 'Fuerte';
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);
    return !!(
      control &&
      control.hasError(errorCode) &&
      (control.dirty || control.touched)
    );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.submitted = true;
    this.userData = {
      fullName: this.form.value.fullName,
      email: this.form.value.email,
      username: this.form.value.username,
      age: this.form.value.age,
    };
  }

  resetForm(): void {
    this.form.reset({
      fullName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      age: '',
      terms: false,
    });
    this.submitted = false;
    this.userData = null;
    this.passwordStrength = '';
  }
}
