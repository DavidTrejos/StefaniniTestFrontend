import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-inventory',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './register-inventory.component.html',
  styleUrl: './register-inventory.component.css'
})
export class RegisterInventoryComponent implements OnInit {

  productTypes: any[] = [];
  formGroup!: FormGroup;
  constructor(private inventoryService: InventoryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inventoryService.getProductTypes().subscribe((data: any) => {
      this.productTypes = data;
    });
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      serial_number: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

  register(): void {
    let formData:any = {
      name: this.formGroup.value.username,
      quantity: 1,
      product_code:this.formGroup.value.serial_number,
      date:this.formGroup.value.date,
      product_type_id: 1,
      status:'entregar'
    };
    this.inventoryService.registerProduct(formData).subscribe(response => {
      alert('Producto registrado con éxito');
    });
  }

  
}
