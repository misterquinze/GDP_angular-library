import { Component, Input, OnInit } from '@angular/core';
import { Buku } from 'src/app/model/Buku';

import { BukuService } from 'src/app/service/buku/buku.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku-detail',
  templateUrl: './buku-detail.component.html',
  styleUrls: ['./buku-detail.component.css']
})
export class BukuDetailComponent implements OnInit {
  @Input() buku?: Buku;
  constructor(private bukuService: BukuService, private msgSvc: MessageService) { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.buku = undefined;
  }

  delete(bukuId: any): void {
    this.msgSvc.add("Deleting Buku with id=" + bukuId);
    this.bukuService.deleteBuku(bukuId).subscribe();
  }
}
