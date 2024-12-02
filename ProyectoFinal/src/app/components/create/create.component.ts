import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, CommonModule,CalendarModule,ReactiveFormsModule,ButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @Input() form1: FormGroup;

  constructor(private fb: FormBuilder){
    this.form1 = this.fb.group({
      comercialname: ['', Validators.required],
      genericname: ['', Validators.required],
      quantity: ['',[Validators.required]],
      lote: ['', [Validators.required]],
      price: ['', Validators.required,  Validators.min(1)],
      description: ['', Validators.required],
      pharmaceuticform: ['',[Validators.required]],
      cum: ['', [Validators.required]],
      finaldate: ['', Validators.required]

    })
  }
}