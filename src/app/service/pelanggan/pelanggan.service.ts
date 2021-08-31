import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Pelanggan } from 'src/app/model/Pelanggan';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  url = 'http://localhost:8888/pelanggan/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPelanggan(): Observable<Pelanggan[]> {
    const dataPelanggan = this.httpClient.get<Pelanggan[]>(this.url).pipe(
        tap((result) => console.log('PelangganService.getAllPelanggan(): Pealnggan berhasil diload'))
      );

    return dataPelanggan;
  }

  updatePelanggan(pelanggan: Pelanggan): Observable<any> {
    const url = this.url + pelanggan.id;

    return this.httpClient.put(url, pelanggan, this.httpOptions).pipe(
      tap((result) => console.log('PelangganService.updatePelanggan(): Pelanggan berhasil di update')));
  }
}
