import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Sewa } from 'src/app/model/Sewa';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SewaService {
  url = 'http://localhost:8888/sewa/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  }

  constructor(
    private httpClient: HttpClient,
    private msgSvc: MessageService
  ) { }

  getAllSewa(): Observable<Sewa[]> {
    const dataSewa = this.httpClient.get<Sewa[]>(this.url).pipe(
      tap((result) => this.msgSvc.add('SewaService.getAllSewa(): Sewa berhasil diload')),
      catchError(this.msgSvc.handleError<Sewa[]>('getAllSewa failed', []))
      );

    return dataSewa;
  }

  updateSewa(sewa: Sewa): Observable<any>{
    const url = this.url + sewa.id;

    return this.httpClient.put(url, sewa, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('SewaService.updateSewa(): Sewa berhasil diupdate')),
      catchError(this.msgSvc.handleError<Sewa[]>('updateSewa failed', []))
      );
  }

  addSewa(sewa: Sewa): Observable<any>{
    const svcUrl = this.url;
    return this.httpClient.post(svcUrl, sewa, this.httpOptions).pipe(
      tap((result) => this.msgSvc.add('SewaService.addSewa(): Sewa baru berhasil ditambahkan')),
      catchError(this.msgSvc.handleError<Sewa[]>('addSewa failed', []))
    );

  }

}
