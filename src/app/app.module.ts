import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SalamComponent } from './components/salam/salam.component';
import { SqrtPipe } from './pipes/app.sqrt';
import { BukuComponent } from './components/buku/buku.component';
import { PelangganComponent } from './components/pelanggan/pelanggan.component';
import { SewaComponent } from './components/sewa/sewa.component';
import { BukuDetailComponent } from './components/buku/buku-detail.component';
import { PelangganDetailComponent } from './components/pelanggan/pelanggan-detail.component';
import { SewaDetailComponent } from './components/sewa/sewa-detail.component';
import { BukuNewFormComponent } from './components/buku/buku-new-form/buku-new-form.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PelangganNewFormComponent } from './components/pelanggan/pelanggan-new-form/pelanggan-new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SalamComponent,
    SqrtPipe,
    BukuComponent,
    PelangganComponent,
    SewaComponent,
    BukuDetailComponent,
    PelangganDetailComponent,
    SewaDetailComponent,
    BukuNewFormComponent,
    MessagesComponent,
    PelangganNewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
