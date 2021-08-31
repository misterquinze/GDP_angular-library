import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SalamComponent } from './components/salam/salam.component';
import { SqrtPipe } from './pipes/app.sqrt';
import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { SewaComponent } from './components/sewa/sewa.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SalamComponent,
    SqrtPipe,
    BukuComponent,
    PelangganComponent,
    SewaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
