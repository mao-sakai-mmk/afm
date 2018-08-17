import { Component } from '@angular/core';

@Component({
    selector: 'app-decimal-pipe',
    templateUrl: './decimal-pipe.component.html',
    styleUrls: ['./decimal-pipe.component.css']
})
export class DecimalPipeComponent {
    public pi: number = 3.14159265359;
    public price: number = 123456789;
    public decimalData: any = {
        minIntegerDigits: 1,
        minFractionDigits: 0,
        maxFractionDigits: 3
    };
    get digitsInfo(): string {
        const minIntegerDigits = this.decimalData.minIntegerDigits ? this.decimalData.minIntegerDigits : 1;
        const minFractionDigits = this.decimalData.minFractionDigits ? this.decimalData.minFractionDigits : 0;
        const maxFractionDigits = this.decimalData.maxFractionDigits ? this.decimalData.maxFractionDigits : 3;
        return `${minIntegerDigits}.${minFractionDigits}-${maxFractionDigits}`;
    }
}
