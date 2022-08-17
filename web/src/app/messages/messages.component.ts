import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  visible = false;
  messages$?: Observable<string[]>;

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messages$ = this.messagesService.messages$
      .pipe(
        tap(() => this.visible = true)
      );
  }
  onClose(): void {
    this.visible = false
  }
}
