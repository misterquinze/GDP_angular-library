import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { BukuService } from 'src/app/service/buku/buku.service';
import { Buku } from 'src/app/model/Buku';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  buku: Buku[] = [];
  jmlBuku = 0;
  selectedBuku?: Buku;

  constructor(private bukuService: BukuService, private msgSvc: MessageService) { }

  ngOnInit(): void {
    // alert(this.bukuService.test());

    // this.buku = this.bukuService.testDataBuku();
    // this.jmlBuku = this.buku.length;

    // this.getAllBuku();

    // this.bukuService.getAllBuku();
  }
  getAllBuku() {
    this.bukuService.getAllBuku().subscribe(result => {
      this.buku = result
      console.log("buku", this.buku);
    });
  }

  onSelectedBuku(buku: Buku){
    this.msgSvc.add("Berhasil ambil data buku details dengan ID = " + buku.id);
    this.selectedBuku = buku;
  }

  delete(bukuId: any): void {
    this.msgSvc.add("Deleting Buku with id=" + bukuId);
    this.bukuService.deleteBuku(bukuId).subscribe();
  }

}
