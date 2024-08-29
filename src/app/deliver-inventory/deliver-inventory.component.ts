import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-deliver-inventory',
  standalone: true,
  imports: [],
  templateUrl: './deliver-inventory.component.html',
  styleUrl: './deliver-inventory.component.css'
})
export class DeliverInventoryComponent implements OnInit {

  inventory: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((data: any) => {
      this.inventory = data;
    });
  }

  onDeliver(productName: string): void {
    this.inventoryService.deliverProduct(productName).subscribe(response => {
      alert('Producto entregado con éxito');
      this.ngOnInit();  
    }, error => {
      alert('Este producto ya fue entregado o no existe.');
    });
  }

  changeStatus(product : any){
    product['status']= product ['status'] == 'entregado' ? 'entregar' : 'entregado'; 
    console.table(product);
    this.inventoryService.updateProduct(product,product['_id']).subscribe(response => {
      alert('Producto cambio su estado');
      this.ngOnInit();  
    }, error => {
      alert('El producto no existe');
    });
  }
}
