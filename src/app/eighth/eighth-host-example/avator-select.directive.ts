import { Directive, ElementRef, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
    selector: 'input[appAvatorSelect]'
})
export class AvatorSelectDirective {
    @HostBinding('type') type = 'file';
    @HostBinding('accept') accepts = '.jpg, .jpeg, .png';
    @HostBinding('style.display') display = 'none';

    protected element: ElementRef;
    @Output() changePath: EventEmitter<string> = new EventEmitter();

    constructor(element: ElementRef) {
        this.element = element;
    }

    /**
     * inputのchangeイベント
     */
    @HostListener('change')
    public onChange(): void {
        const files = this.element.nativeElement.files;
        if (files.length) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.changePath.emit(e.target.result);
            };
            reader.readAsDataURL(files[0]);
        }
    }
}
