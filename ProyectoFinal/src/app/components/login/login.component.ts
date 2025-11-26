import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'; // IMPORTANTE

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input() user!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService   // INYECTAR SERVICIO
  ) {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  redirigir() {
    if (this.user.invalid) {
      this.errorMessage = "Complete los campos.";
      return;
    }

    const data = this.user.value;

    this.authService.login(data).subscribe({
      next: (res) => {
        console.log("LOGIN OK: ", res);
        this.router.navigate(['/menu']);  // REDIRECCIÓN EXITOSA
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = "Usuario o contraseña incorrectos.";
      }
    });
  }

  redirigir1() {
    this.router.navigate(['/register']);
  }
}
