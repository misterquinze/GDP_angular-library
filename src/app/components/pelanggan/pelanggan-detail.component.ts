import { Component, Input, OnInit } from '@angular/core';
import { Pelanggan } from 'src/app/model/Pelanggan';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';
@Component({
  selector: 'app-pelanggan-detail',
  templateUrl: './pelanggan-detail.component.html',
  styleUrls: ['./pelanggan-detail.component.css']
})
export class PelangganDetailComponent implements OnInit {
  @Input() pelanggan?: Pelanggan;
  constructor(private pelangganService: PelangganService) { }

  ngOnInit(): void {
  }

  update(): void {
    if(this.pelanggan){
      this.pelangganService.updatePelanggan(this.pelanggan).subscribe();
    }
  }

}
