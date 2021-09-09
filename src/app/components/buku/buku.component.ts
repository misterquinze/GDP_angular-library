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

  selectedBuku?: Buku;

  constructor(private bukuService: BukuService, private msgSvc: MessageService) { }

  ngOnInit(): void {
    // this.jmlBuku = this.buku.length;
    this.getAllBuku();

  }
  getAllBuku() {
    this.bukuService.getAllBuku().subscribe(result => {
      this.buku = result;
      this.msgSvc.add("Berhasil ambil seluruh data buku " );
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
