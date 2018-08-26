import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-eighth-animation',
    templateUrl: './eighth-animation.component.html',
    styleUrls: ['./eighth-animation.component.css'],
    animations: [
        trigger('fade', [
            state('fadeIn', style({ opacity: 1 })),
            state('fadeOut', style({ opacity: 0.1 })),
            transition('fadeIn <=> fadeOut', animate('2000ms linear'))
        ]),
        trigger('size', [
            state('resize', style({ transform: 'scale(1)' })),
            state('sizeUp', style({ transform: 'scale(1.5)' })),
            transition('resize <=> sizeUp', animate('200ms linear'))
        ]),
        trigger('bound', [
            state('active', style({ animation: 'bound .3s ease infinite alternate' })),
            transition('void => active', animate('200ms linear'))
        ]),
        trigger('rough', [
            state('active', style({ animation: 'rough 1s ease infinite alternate' })),
            transition('void => active', animate('200ms linear'))
        ])
    ]
})
export class EighthAnimationComponent {
    public fade: 'fadeIn' | 'fadeOut' = 'fadeIn';
    public size: 'resize' | 'sizeUp' = 'resize';
    public bound: '' | 'active' = '';
    public rough: '' | 'active' = '';

    public toggleFade() {
        this.fade = this.fade === 'fadeIn' ? 'fadeOut' : 'fadeIn';
    }

    public sizeChange() {
        this.size = this.size === 'resize' ? 'sizeUp' : 'resize';
    }

    public toggleBound() {
        this.bound = this.bound ? '' : 'active';
    }

    public toggleRough() {
        this.rough = this.rough ? '' : 'active';
    }
}
