import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

class Movie {
    public release_date: Date;
    public title: string;
    public english_title: string;
    constructor(movie: any) {
        this.release_date = new Date(movie.release_date);
        this.title = movie.title;
        this.english_title = movie.english_title;
    }
}

@Component({
    selector: 'app-release-seven-o',
    templateUrl: './release-seven-o.component.html',
    styleUrls: ['./release-seven-o.component.css']
})
export class ReleaseSevenOComponent implements OnInit {
    public releaseDate: Date = new Date('2018-10-19');

    public names: string[] = Array.from({length: 1000}).map((_, i) => `Mickey Mouse`);
    public herName: string = 'Minnie Mouse';
    public mmIndex: number = -1;
    public selectedIndex: number = -1;
    public itemSize: number = 50;
    public isFinishQ1: boolean = false;
    @ViewChild('vs') vs:  CdkVirtualScrollViewport;

    public c20Movies: Movie[] = [
        new Movie({release_date: '1991-11-13', title: '美女と野獣', english_title: 'Beauty and the Beast'}),
        new Movie({release_date: '2010-11-12', title: '塔の上のラプンツェル', english_title: 'Tangled'}),
        new Movie({release_date: '2002-06-16', title: 'リロ・アンド・スティッチ', english_title: 'Lilo & Stitch'}),
        new Movie({release_date: '2013-11-27', title: 'アナと雪の女王', english_title: 'Frozen'}),
        new Movie({release_date: '1994-06-24', title: 'ライオン・キング', english_title: 'The Lion King'}),
        new Movie({release_date: '2007-06-29', title: 'レミーのおいしいレストラン', english_title: 'Ratatouille'}),
        new Movie({release_date: '1999-11-24', title: 'トイ・ストーリー2', english_title: 'Toy Story 2'}),
        new Movie({release_date: '1955-06-16', title: 'わんわん物語', english_title: 'Lady and the Tramp'}),
        new Movie({release_date: '2008-11-21', title: 'ボルト', english_title: 'Bolt'}),
        new Movie({release_date: '1941-10-23', title: 'ダンボ', english_title: 'Dumbo'})
    ];
    public c21Movies: Movie[] = [];
    public isFinishQ2: boolean = false;

    public ngOnInit(): void {
        this.mmIndex = Math.floor(Math.random() * Math.floor(1000));
        this.names[this.mmIndex] = this.herName;
    }

    /**
     * 名前選択
     * @param {number} i
     */
    public selectName(i: number): void {
        this.isFinishQ1 = true;
        this.selectedIndex = i;
        // 答えまでスクロール
        this.vs.scrollToIndex(this.mmIndex);
    }

    public checkName(): boolean {
        return this.selectedIndex === this.mmIndex;
    }

    /**
     * cdkDropListDropped発動時に発火
     * @param {CdkDragDrop<Movie[]>} event
     */
    public dropMovie(event: CdkDragDrop<Movie[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }

    public checkMovie(): boolean {
        return !this.c20Movies.find(movie => movie.release_date >= new Date('2000-01-01'));
    }
}
