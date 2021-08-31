import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import{ bukuSample } from 'src/app/buku-sample'
import { Buku } from 'src/app/model/Buku';

@Injectable({
  providedIn: 'root'
})
export class BukuService {
  buku: Buku[] = bukuSample;
  url = 'http://localhost:8888/buku/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  }

  constructor(
    private httpClient: HttpClient
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
        tap((result) => console.log('BukuService.getAllBuku(): Buku berhasil diload'))
      );

    return dataBuku;
  }

  updateBuku(buku: Buku): Observable<any> {
    const url = this.url + buku.id;

    return this.httpClient.put(url, buku, this.httpOptions).pipe(
      tap((result) => console.log('BukuService.updateBuku(): Buku berhasil di update')));
  }
}


