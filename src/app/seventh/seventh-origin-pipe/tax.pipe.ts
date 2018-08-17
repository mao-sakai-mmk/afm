import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tax'
})
export class TaxPipe implements PipeTransform {
    protected methods: string[] = [
        'floor', 'ceil', 'round'
    ];
    protected defaultMethod: string = this.methods[0];
    protected defaultTaxRate: number = 8;

    transform(value: any, ...args: any[]): number {
        let method = this.defaultMethod;
        let taxRate = this.defaultTaxRate;
        if (args.length && this.methods.find(item => item === args[0])) {
            // 計算方法の指定がある場合
            method = args[0];
        }

        if (args.length > 1) {
            // 消費税率の指定がある場合
            taxRate = args[1];
        }

        return Math[method](value * (1 + taxRate / 100));
    }
}
