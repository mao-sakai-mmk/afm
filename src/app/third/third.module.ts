import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ThirdRoutingModule } from './third-routing.module';

import { ThirdNewComponent } from './third-new/third-new.component';
import { ThirdShoppingComponent } from './third-shopping/third-shopping.component';
import { ThirdProductListComponent } from './third-product-list/third-product-list.component';

@NgModule({
    imports: [
        SharedModule,
        ThirdRoutingModule
    ],
    declarations: [
        ThirdNewComponent,
        ThirdShoppingComponent,
        ThirdProductListComponent
    ]
})
export class ThirdModule { }
