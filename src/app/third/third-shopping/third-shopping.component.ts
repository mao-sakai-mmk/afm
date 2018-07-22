import { Component, OnInit } from '@angular/core';
import { Product } from '../third-product-list/third-product-list.component';

@Component({
    selector: 'app-third-shopping',
    templateUrl: './third-shopping.component.html',
    styleUrls: ['./third-shopping.component.css']
})
export class ThirdShoppingComponent implements OnInit {
    public cart: Product[] = [];

    get total_price(): number {
        let price: number = 0;
        this.cart.forEach((item) => {
            price += item.sale_price * item.count;
        });
        return price;
    }

    get total_count(): number {
        let count: number = 0;
        this.cart.forEach((item) => {
            count += item.count;
        });
        return count;
    }

    public discountRate: number = 0;
    public start: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    public startShopping(): void {
        this.start = true;
    }

    public buy(item: Product): void {
        const existItem = this.cart.find((product => product.name === item.name));
        if (existItem) {
            existItem.count++;
        } else {
            this.cart.push(item);
        }
    }
}
