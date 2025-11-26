import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const { username, password } = this.registerForm.value;

    this.userService.registerUser(username, password).subscribe({
      next: (res) => {
        this.message = 'Usuario registrado correctamente!';
        setTimeout(() => this.router.navigate(['/menu']), 1200);
      },
      error: (err) => {
        this.message = 'Error registrando usuario';
      }
    });
  }
}
