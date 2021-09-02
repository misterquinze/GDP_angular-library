import { Component, OnInit } from '@angular/core';
import { Pelanggan } from 'src/app/model/Pelanggan';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';

@Component({
  selector: 'app-pelanggan-new-form',
  templateUrl: './pelanggan-new-form.component.html',
  styleUrls: ['./pelanggan-new-form.component.css']
})
export class PelangganNewFormComponent implements OnInit {

  constructor(private pelangganService: PelangganService) { }

  ngOnInit(): void {
  }

  save(pelanggan: Pelanggan): void {
    if(pelanggan) {
      console.log("pelangganForm", pelanggan);
      alert('Saving pelanggan...');
      this.pelangganService.addPelanggan(pelanggan).subscribe();
    }
  }

}
