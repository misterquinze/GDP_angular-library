import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Buku } from 'src/app/model/Buku';
import { BukuService } from 'src/app/service/buku/buku.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-buku-edit-form',
  templateUrl: './buku-edit-form.component.html',
  styleUrls: ['./buku-edit-form.component.css']
})
export class BukuEditFormComponent implements OnInit {
  @Input() buku?: Buku;

  bukuId?: string;
  constructor(private bukuService: BukuService, private pathVar: ActivatedRoute,
    private msgSvc: MessageService) { }

  ngOnInit(): void {
    this.bukuId = this.pathVar.snapshot.paramMap.get("id")?.toString();
    this.getBukuById();
  }

  update(): void {
    if (this.buku) {
      this.bukuService.updateBuku(this.buku).subscribe();
    }
  }

  getBukuById() {
    this.bukuService.getBukuById(this.bukuId??'').subscribe(res => {
      this.msgSvc.add("Buku Id = " + this.bukuId + " is loading...");
      this.buku = res;
    });
  }
}
