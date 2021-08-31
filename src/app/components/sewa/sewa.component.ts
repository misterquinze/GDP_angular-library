import { Component, OnInit } from '@angular/core';

import { SewaService } from 'src/app/service/sewa/sewa.service';
import { Sewa } from 'src/app/model/Sewa';
@Component({
  selector: 'app-sewa',
  templateUrl: './sewa.component.html',
  styleUrls: ['./sewa.component.css']
})
export class SewaComponent implements OnInit {
  sewa: Sewa[] = [];
  jmlsewa = 0;
  selectedsewa?: Sewa;

  constructor(private sewaService: SewaService) { }

  ngOnInit(): void {
  }

  getAllSewa() {
    this.sewaService.getAllSewa().subscribe(result => {
      this.sewa = result
      console.log("sewa", this.sewa);
    });
  }

  onSelectedSewa(sewa: Sewa) {
    this.selectedsewa = sewa;
  }
}
