import { Component, Input, OnInit } from '@angular/core';
import { Sewa } from 'src/app/model/Sewa';
import { SewaService } from 'src/app/service/sewa/sewa.service';

@Component({
  selector: 'app-sewa-detail',
  templateUrl: './sewa-detail.component.html',
  styleUrls: ['./sewa-detail.component.css']
})
export class SewaDetailComponent implements OnInit {
  @Input() sewa?: Sewa;
  constructor( private sewaService: SewaService ) { }

  ngOnInit(): void {
  }

}
