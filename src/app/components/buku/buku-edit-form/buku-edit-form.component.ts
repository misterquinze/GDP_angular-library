import { Component, Input, OnInit } from '@angular/core';
import { Buku } from 'src/app/model/Buku';
import { BukuService } from 'src/app/service/buku/buku.service';

@Component({
  selector: 'app-buku-edit-form',
  templateUrl: './buku-edit-form.component.html',
  styleUrls: ['./buku-edit-form.component.css']
})
export class BukuEditFormComponent implements OnInit {
  @Input() buku?: Buku;

  constructor(private bukuService: BukuService) { }

  ngOnInit(): void {
  }

  update(): void {
    if (this.buku) {
      this.bukuService.updateBuku(this.buku).subscribe();
    }
  }
}
