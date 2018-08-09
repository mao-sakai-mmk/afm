import { Injectable } from '@angular/core';
import { YOUR_MESSAGES } from '../mocks/message';
import { Observable, of } from 'rxjs';

export interface MessageType {
    isMy: boolean;
    text: string;
}

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messages: MessageType[] = [];

    /**
     * メッセージ追加
     * @param {string} text
     * @returns {Observable<MessageType>}
     */
    public add(text: string): Observable<MessageType> {
        const message = {isMy: true, text: text};
        this.messages.push(message);
        return of(message);
    }

    /**
     * メッセージ受け取り
     * @returns {Observable<MessageType[]>}
     */
    public get(): Observable<MessageType[]> {
        const message = YOUR_MESSAGES[Math.floor(Math.random() * YOUR_MESSAGES.length)];
        this.messages.push({isMy: false, text: message.text});
        return of(this.messages);
    }
}
