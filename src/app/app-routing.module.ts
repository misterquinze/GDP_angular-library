import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BukuEditFormComponent } from './components/buku/buku-edit-form/buku-edit-form.component';
import { BukuNewFormComponent } from './components/buku/buku-new-form/buku-new-form.component';
import { BukuComponent } from './components/buku/buku.component';
import { PelangganNewFormComponent } from './components/pelanggan/pelanggan-new-form/pelanggan-new-form.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';

import { SalamComponent } from "./components/salam/salam.component"
import { SewaNewFormComponent } from './components/sewa/sewa-new-form/sewa-new-form.component';
import { SewaComponent } from './components/sewa/sewa.component';

const routes: Routes = [
  {path: "",component:SalamComponent},
  {path:"buku", component:BukuComponent},
  {path:"buku-new-form", component:BukuNewFormComponent},
  {path:"buku-edit-form/:id", component:BukuEditFormComponent},
  {path:"pelanggan", component:PelangganComponent},
  {path:"sewa", component:SewaComponent},
  {path:"sewa-new-form", component:SewaNewFormComponent},

  {path:"pelanggan-new-form", component:PelangganNewFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
