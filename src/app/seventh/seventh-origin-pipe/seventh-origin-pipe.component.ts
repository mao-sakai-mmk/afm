import { Component } from '@angular/core';

@Component({
    selector: 'app-seventh-origin-pipe',
    templateUrl: './seventh-origin-pipe.component.html',
    styleUrls: ['./seventh-origin-pipe.component.css']
})
export class SeventhOriginPipeComponent {
    public price: number = 0;
    public taxRate: number = 8;
    public selectedMethod: string = '';
    public methods: any[] = [
        {label: '切り捨て', value: 'floor'},
        {label: '切り上げ', value: 'ceil'},
        {label: '四捨五入', value: 'round'}
    ];
}
