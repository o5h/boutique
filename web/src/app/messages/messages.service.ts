import { Injectable } from "@angular/core";
import { BehaviorSubject, filter } from "rxjs";

@Injectable()
export class MessagesService {

    private subject = new BehaviorSubject<string[]>([]);
    messages$ = this.subject.asObservable().pipe(
        filter(messages => messages && messages.length > 0)
    );

    showMessages(...messages: string[]) {
        this.subject.next(messages);
    }
}