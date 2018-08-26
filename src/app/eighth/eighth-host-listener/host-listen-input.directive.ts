import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: 'input[appHostListenInput]'
})
export class HostListenInputDirective {
    @Output() log = new EventEmitter<string|string[]>();

    @HostListener('click')
    public onClick() {
        this.log.emit('click');
    }

    @HostListener('focus')
    public onFocus() {
        this.log.emit('focus');
    }

    @HostListener('blur')
    public onBlur() {
        this.log.emit('blur');
    }

    @HostListener('keydown', ['$event'])
    public onKeydown(event: KeyboardEvent) {
        this.log.emit(['keydown', event.constructor.name]);
    }
}
