import { AuthService } from '../core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage = '';
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService
        .login(email, password)
        .then(() => this.router.navigate(['home']))
        .catch((e) => {
          this.errorMessage = e.message;
        });
    }
  }
}
