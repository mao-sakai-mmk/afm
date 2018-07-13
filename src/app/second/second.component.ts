import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    public section: number = 0;

    public word: string = '';

    public name: string = '';
    public isClicked: boolean = false;

    public members: {id: number; name: string}[] = [
        {id: 1, name: 'Mao Miyaji'},
        {id: 2, name: 'Taro Yamada'},
        {id: 3, name: 'Jiro Tanaka'},
        {id: 4, name: 'Hanako Sato'},
        {id: 5, name: 'Naoko Kato'},
    ];

    public fruits: string[] = [
        'apple', 'orange', 'grape', 'strawberry', 'lemon'
    ];
    public selectedFruit: string = '';

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.section = +this.route.snapshot.params.section;
    }

    public click(): void {
        this.isClicked = true;
    }
}
