import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

export class Product {
    public name: string;
    public unit_price: number;
    public count: number;
    public sale_price?: number;

    constructor(product: any) {
        this.name = product.name;
        this.unit_price = product.unit_price;
        this.count = product.count;
        this.sale_price = product.sale_price;
    }
}

@Component({
    selector: 'app-third-product-list',
    templateUrl: './third-product-list.component.html',
    styleUrls: ['./third-product-list.component.css']
})
export class ThirdProductListComponent implements OnInit {
    public products: Product[] = [
        {name: '商品A', unit_price: 1000, count: 1},
        {name: '商品B', unit_price: 2000, count: 1},
        {name: '商品C', unit_price: 3000, count: 1},
        {name: '商品AA', unit_price: 1420, count: 1},
        {name: '商品BB', unit_price: 1980, count: 1},
        {name: '商品CC', unit_price: 3120, count: 1},
    ];

    @Input() discountRate: number = 0;

    @Output() buy: EventEmitter<Product> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public calcSalePrice(unit_price: number): number {
        return Math.floor(unit_price * (1 - (this.discountRate / 100)));
    }

    public clickBtn(item: Product): void {
        item.sale_price = this.calcSalePrice(item.unit_price);
        this.buy.emit(item);
    }
}
