import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { ManageProductsService } from '../../service/manage-products.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  formUpdate!: FormGroup;
  productId!: string;

  constructor(
    private fb: FormBuilder,
    private producService: ManageProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Crear formulario
    this.formUpdate = this.fb.group({
      comercialname: ['', Validators.required],
      genericname: ['', Validators.required],
      quantity: ['', Validators.required],
      lote: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      pharmaceuticform: ['', Validators.required],
      cum: ['', Validators.required],
      finaldate: ['', Validators.required]
    });

    
    this.productId = String(this.route.snapshot.paramMap.get('id'));


    this.loadProductData();
  }

  //Cargar datos del producto para rellenar el formulario
  loadProductData(): void {
    this.producService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.formUpdate.patchValue({
          comercialname: product.comercialName,
          genericname: product.genericName,
          quantity: product.quantity,
          lote: product.lote,
          price: product.price,
          description: product.description,
          pharmaceuticform: product.pharmaceuticForm,
          cum: product.cum,
          finaldate: new Date(product.finalDate) 
        });
      },
      error: () => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar la información del producto",
          heightAuto: false
        });
      }
    });
  }

  goBack() {
    window.history.back();
  }

  onUpdate(): void {
    if (this.formUpdate.invalid) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Formulario inválido",
        text: "Por favor corrige los campos señalados.",
        heightAuto: false,
        showConfirmButton: true
      });
      return;
    }

    const updatedData = this.formUpdate.value;

    this.producService.updateProduct(
      this.productId,
      updatedData.comercialname,
      updatedData.genericname,
      String(updatedData.quantity),
      updatedData.lote,
      String(updatedData.price),
      updatedData.description,
      updatedData.pharmaceuticform,
      updatedData.cum,
      updatedData.finaldate
    ).subscribe({
      next: (response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Producto actualizado",
          showConfirmButton: false,
          heightAuto: false,
          timer: 1500
        });

        this.router.navigate(['/management']);
      },
      error: () => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error al actualizar",
          text: "Por favor intenta nuevamente.",
          heightAuto: false
        });
      }
    });
  }
}
