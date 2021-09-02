import { Component, OnInit } from '@angular/core';

import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';
import { Pelanggan } from 'src/app/model/Pelanggan';
import { MessageService } from 'src/app/service/message/message.service';
@Component({
  selector: 'app-pelanggan',
  templateUrl: './pelanggan.component.html',
  styleUrls: ['./pelanggan.component.css']
})
export class PelangganComponent implements OnInit {
  pelanggan: Pelanggan[] = [];
  jmlpelanggan = 0;
  selectedpelanggan?: Pelanggan;

  constructor(
    private pelangganService: PelangganService, private msgSvc: MessageService) { }

  ngOnInit(): void {
  }

  getAllPelanggan() {
    this.pelangganService.getAllPelanggan().subscribe(result => {
      this.pelanggan = result
      console.log("pelanggan", this.pelanggan);
    });
  }

  onSelectedPelanggan(pelanggan: Pelanggan) {
    this.selectedpelanggan = pelanggan;
  }

  delete(pelangganId: any): void {
    this.msgSvc.add("Deleting pelanggan with id=" + pelangganId);
    this.pelangganService.deletePelanggan(pelangganId).subscribe();
  }
}
