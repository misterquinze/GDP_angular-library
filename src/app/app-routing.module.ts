import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';

import { SalamComponent } from "./components/salam/salam.component"
import { SewaComponent } from './components/sewa/sewa.component';

const routes: Routes = [
  {path: "",component:SalamComponent},
  {path:"buku", component:BukuComponent},
  {path:"pelanggan", component:PelangganComponent},
  {path:"sewa", component:SewaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
