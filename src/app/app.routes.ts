import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInventoryComponent } from './register-inventory/register-inventory.component';
import { DeliverInventoryComponent } from './deliver-inventory/deliver-inventory.component';

export const routes: Routes = [
    { path: 'register', component:RegisterInventoryComponent },
    { path: 'delivery', component:DeliverInventoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }