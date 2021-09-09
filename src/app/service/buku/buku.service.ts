import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import{ bukuSample } from 'src/app/buku-sample'
import { Buku } from 'src/app/model/Buku';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  // buku: Buku[] = bukuSample;
  url = 'http://localhost:8888/buku/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
   ) { }

  // test():String {
  //   return 'test service';
  // }

  // testDataBuku(): Buku[] {
  //   // console.log(this.buku);
  //   return this.buku;

  // }
  getAllBuku(): Observable<Buku[]> {
    const dataBuku = this.httpClient.get<Buku[]>(this.url).pipe(
        tap((result) => this.msgSvc.add('BukuService.getAllBuku(): Buku berhasil diload')),
        catchError(this.msgSvc.handleError<Buku[]>('getAllBuku failed', []))
      );
    return dataBuku;
  }

  addBuku(buku: Buku): Observable<any>{
    return this.httpClient.post(this.url, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.addBuku(): Buku baru berhasil ditambahkan')),
      catchError(this.msgSvc.handleError<Buku[]>('addBuku failed', []))
    );
  }

  updateBuku(buku: Buku): Observable<any> {
    const url = this.url + buku.id;

    return this.httpClient.put(url, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.updateBuku(): Buku berhasil di update')),
      catchError(this.msgSvc.handleError<Buku[]>('updateBuku failed', [])));
  }

  deleteBuku(bukuId: any): Observable<any> {
    const svcUrl = this.url + bukuId;

    return this.httpClient.delete(svcUrl).pipe(
      tap((result) => this.msgSvc.add('BukuService.deleteBuku(): Buku berhasil diahapus dari WebService!')),
      catchError(this.msgSvc.handleError<Buku[]>('deleteBuku failed', []))
    );
  }

  getBukuById(bukuId: string): Observable<Buku>  {
    return this.httpClient.get<Buku>(this.url + bukuId).pipe(
      tap((result) => this.msgSvc.add('BukuService.getBukuById(): Buku Id=' + bukuId + 'berhasil diload dari WebService!')),
      catchError(this.msgSvc.handleError<Buku>('getBukuById failed'))
    );
  }

}


