import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { BukuService } from 'src/app/service/buku/buku.service';
import { Buku } from 'src/app/model/Buku';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  buku: Buku[] = [];
  jmlBuku = 0;
  selectedBuku?: Buku;

  constructor(private bukuService: BukuService) { }

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
    this.selectedBuku = buku;
  }
}
