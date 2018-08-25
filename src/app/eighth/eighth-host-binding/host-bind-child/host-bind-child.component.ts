import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-host-bind-child',
    template: `
        <p>Child Componentです！</p>
    `,
    styles: [`
        :host {
            transition: all .3s ease;
        }
    `]
})
export class HostBindChildComponent implements OnChanges {
    @Input() @HostBinding('style.display') display: string;
    @Input() @HostBinding('style.font-size.px') fontSize: number;
    @Input() @HostBinding('style.height.px') height: number;

    @Input() @HostBinding('class.night-mode') nightMode: boolean;
    @HostBinding('class.noon-mode') noonMode: boolean;
    @HostBinding('style.color') color: string = '';

    ngOnChanges(changes: SimpleChanges) {
        if (changes.nightMode) {
            this.noonMode = !this.nightMode;
            this.color = this.nightMode ? '#fff' : '';
        }
    }
}
