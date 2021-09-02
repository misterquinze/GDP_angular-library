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
  buku: Buku[] = bukuSample;
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

  testDataBuku(): Buku[] {
    // console.log(this.buku);
    return this.buku;

  }

  getAllBuku(): Observable<Buku[]> {
    const dataBuku = this.httpClient.get<Buku[]>(this.url).pipe(
        tap((result) => this.msgSvc.add('BukuService.getAllBuku(): Buku berhasil diload')),
        catchError(this.msgSvc.handleError<Buku[]>('getAllBuku failed', []))
      );

    return dataBuku;
  }

  updateBuku(buku: Buku): Observable<any> {
    const url = this.url + buku.id;

    return this.httpClient.put(url, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.updateBuku(): Buku berhasil di update')),
      catchError(this.msgSvc.handleError<Buku[]>('updateBuku failed', [])));
  }

  addBuku(buku: Buku): Observable<any>{
    const svcUrl = this.url;
    return this.httpClient.post(svcUrl, buku, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('BukuService.addBuku(): Buku baru berhasil ditambahkan')),
      catchError(this.msgSvc.handleError<Buku[]>('addBuku failed', []))
    );

  }
}


