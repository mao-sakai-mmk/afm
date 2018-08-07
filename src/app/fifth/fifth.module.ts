import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FifthRoutingModule } from './fifth-routing.module';

import { FifthComponent } from './fifth.component';
import { FifthCssBindComponent } from './fifth-css-bind/fifth-css-bind.component';
import { FifthTempComponent } from './fifth-temp/fifth-temp.component';

@NgModule({
    imports: [
        SharedModule,
        FifthRoutingModule
    ],
    declarations: [
        FifthComponent,
        FifthCssBindComponent,
        FifthTempComponent,
    ]
})
export class FifthModule { }
