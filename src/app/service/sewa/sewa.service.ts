import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Sewa } from 'src/app/model/Sewa';

@Injectable({
  providedIn: 'root'
})
export class SewaService {
  url = 'http://localhost:8888/sewa/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'aplication/json'})
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllSewa(): Observable<Sewa[]> {
    const dataSewa = this.httpClient.get<Sewa[]>(this.url).pipe(
        tap((result) => console.log('SewaService.getAllSewa(): Sewa berhasil diload'))
      );

    return dataSewa;
  }

  updateSewa(sewa: Sewa): Observable<any>{
    const url = this.url + sewa.id;

    return this.httpClient.put(url, sewa, this.httpOptions).pipe(tap((result) => console.log('SewaService.updateSewa():Sewa berhasil di update')));
  }

}
