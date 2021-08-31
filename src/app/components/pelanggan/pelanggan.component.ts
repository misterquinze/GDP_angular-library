import { Component, OnInit } from '@angular/core';

import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';
import { Pelanggan } from 'src/app/model/Pelanggan';
@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {
  pelanggan: Pelanggan[] = [];
  jmlpelanggan = 0;
  selectedpelanggan?: Pelanggan;
  constructor(private pelangganService: PelangganService) { }

  ngOnInit(): void {
  }

  getAllPelanggan() {
    this.pelangganService.getAllPelanggan().subscribe(result => {
      this.pelanggan = result
      console.log("pelanggan", this.pelanggan);
    })
  }

  onSelectedPelanggan(pelanggan: Pelanggan) {
    this.selectedpelanggan = pelanggan;
  }

}
