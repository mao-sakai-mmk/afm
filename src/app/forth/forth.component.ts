import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forth',
    templateUrl: './forth.component.html',
    styleUrls: ['./forth.component.css']
})
export class ForthComponent implements OnInit {
    public logger: string = '';
    public displayChild: boolean = false;
    public word: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    public getLogger(log: string): void {
        this.logger += `<br>${log}`;
    }

    public resetLogger(): void {
        this.logger = '';
    }

}
