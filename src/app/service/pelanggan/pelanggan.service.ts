import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Pelanggan } from 'src/app/model/Pelanggan';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  url = 'http://localhost:8888/pelanggan/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  getAllPelanggan(): Observable<Pelanggan[]> {
    const dataPelanggan = this.httpClient.get<Pelanggan[]>(this.url).pipe(
        tap((result) =>this.msgSvc.add('PelangganService.getAllPelanggan(): Pelanggan berhasil diload')),
        catchError(this.msgSvc.handleError<Pelanggan[]>('getAllPelanggan failed', []))
      );

    return dataPelanggan;
  }

  updatePelanggan(pelanggan: Pelanggan): Observable<any> {
    const url = this.url + pelanggan.id;

    return this.httpClient.put(url, pelanggan, this.httpOptions).pipe(
      tap((result) =>  this.msgSvc.add('PelangganService.updatePelanggan(): Pelanggan berhasil di update')),
      catchError(this.msgSvc.handleError<Pelanggan[]>('updatePelanggan failed', []))
      );
  }

  addPelanggan(pelanggan: Pelanggan): Observable<any>{
    return this.httpClient.post(this.url, pelanggan, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('PelangganService.addPelanggan(): Pelanggan baru berhasil ditambahkan')),
      catchError(this.msgSvc.handleError<Pelanggan[]>('addPelanggan failed', []))
    );
  }

  deletePelanggan(pelangganId: any): Observable<any> {
    const svcUrl = this.url + pelangganId;

    return this.httpClient.delete(svcUrl).pipe(
      tap((result) => this.msgSvc.add('PelangganService.deletePelanggan(): Pelanggan berhasil diahapus dari WebService!')),
      catchError(this.msgSvc.handleError<Pelanggan[]>('deletePelanggan failed', []))
    );
  }
}
