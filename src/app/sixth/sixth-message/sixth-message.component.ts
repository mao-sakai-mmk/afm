import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService, MessageType } from '../../services/message.service';

@Component({
    selector: 'app-sixth-message',
    templateUrl: './sixth-message.component.html',
    styleUrls: ['./sixth-message.component.css']
})
export class SixthMessageComponent implements OnInit {
    public messages: MessageType[] = [];
    public formMessage: string = '';

    @ViewChild('messageBlock') messageBlock: ElementRef;

    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        this.receive();
    }

    public send(): void {
        this.messageService.add(this.formMessage)
            .subscribe(() => {
                this.receive();
                this.formMessage = '';
            });
    }

    private receive(): void {
        this.messageService.get()
            .subscribe(messages => {
                this.messages = messages;
                setTimeout(() => {
                    this.messageBlock.nativeElement.scrollTop = this.messageBlock.nativeElement.scrollHeight;
                });
            });
    }
}
