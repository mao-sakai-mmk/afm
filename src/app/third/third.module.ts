import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';

import { ThirdNewComponent } from './third-new/third-new.component';
import { ThirdShoppingComponent } from './third-shopping/third-shopping.component';
import { ThirdProductListComponent } from './third-product-list/third-product-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThirdRoutingModule
    ],
    declarations: [
        ThirdNewComponent,
        ThirdShoppingComponent,
        ThirdProductListComponent
    ]
})
export class ThirdModule { }
