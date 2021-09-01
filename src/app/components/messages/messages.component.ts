import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public msgSvc: MessageService) { }

  ngOnInit(): void {
  }

}
