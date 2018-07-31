import {
    Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, AfterViewInit, DoCheck, AfterViewChecked,
    AfterContentInit, AfterContentChecked, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-forth-child',
    templateUrl: './forth-child.component.html',
    styleUrls: ['./forth-child.component.css']
})
export class ForthChildComponent
implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() word: string = '';

    @Output() hook: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.word) {
            this.hook.emit(`wordが変更されました。${changes.word.previousValue} → ${changes.word.currentValue}`);
        }
        this.emitHook('OnChanges', 'primary');
    }

    ngOnInit(): void {
        this.emitHook('OnInit', 'warning');
    }

    ngDoCheck(): void {
        this.emitHook('DoCheck', 'secondary');
    }

    ngAfterContentInit(): void {
        this.emitHook('AfterContentInit', 'info');
    }

    ngAfterContentChecked(): void {
        this.emitHook('AfterContentChecked', 'success');
    }

    ngAfterViewInit(): void {
        this.emitHook('AfterViewInit', 'danger');
    }

    ngAfterViewChecked(): void {
        this.emitHook('AfterViewChecked', 'muted');
    }

    ngOnDestroy(): void {
        this.emitHook('OnDestroy', 'dark');
    }

    private emitHook(hookName: string, color?: string): void {
        this.hook.emit(`<span class="text-${color}">${hookName}</span>が実行されました！`);
    }

}
