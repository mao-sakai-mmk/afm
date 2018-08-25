import { Component } from '@angular/core';

@Component({
    selector: 'app-eighth-host-listener',
    templateUrl: './eighth-host-listener.component.html',
    styleUrls: ['./eighth-host-listener.component.css']
})
export class EighthHostListenerComponent {
    public text: string = '';
    public logger: string[] = [];

    public addLogger(eventLog: string|string[]): void {
        let eventName: string = '';
        let eventType: string = '';
        if (typeof eventLog === 'string') {
            eventName = eventLog;
        } else {
            eventName = eventLog[0];
            eventType = eventLog[1];
        }
        const log: string = `【Event: ${eventName}】${eventType}`;
        this.logger.push(log);
    }

    public resetLogger(): void {
        this.logger = [];
    }
}
