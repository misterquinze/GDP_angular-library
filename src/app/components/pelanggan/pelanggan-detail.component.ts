import { Component, Input, OnInit } from '@angular/core';
import { Pelanggan } from 'src/app/model/Pelanggan';
import { MessageService } from 'src/app/service/message/message.service';
import { PelangganService } from 'src/app/service/pelanggan/pelanggan.service';
@Component({
  selector: 'app-pelanggan-detail',
  templateUrl: './pelanggan-detail.component.html',
  styleUrls: ['./pelanggan-detail.component.css']
})
export class PelangganDetailComponent implements OnInit {
  @Input() pelanggan?: Pelanggan;
  constructor(
    private pelangganService: PelangganService,
    private msgSvc: MessageService ) { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.pelanggan = undefined;
  }

  update(): void {
    if(this.pelanggan){
      this.pelangganService.updatePelanggan(this.pelanggan).subscribe();
    }
  }

  delete(pelangganId: any): void {
    this.msgSvc.add("Deleting pelanggan with id=" + pelangganId);
    this.pelangganService.deletePelanggan(pelangganId).subscribe();
  }
}
