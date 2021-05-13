import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;
  errorMessage: string = '';
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

  register() {
    const { email, password } = this.form.value;
    this.authService
      .emailSignup(email, password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
