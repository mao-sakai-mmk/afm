import { Component } from '@angular/core';

@Component({
    selector: 'app-date-pipe',
    templateUrl: './date-pipe.component.html',
    styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent {
    public now: number = Date.now();
    public formats: string[] = [
        'short',
        'medium',
        'long',
        'full',
        'shortDate',
        'mediumDate',
        'longDate',
        'fullDate',
        'shortTime',
        'mediumTime',
        'longTime',
        'fullTime',
        'yyyy年MM月dd日 HH時mm分ss秒'
    ];
    public selectedFormat: string = '';
}
