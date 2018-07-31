import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ForthRoutingModule } from './forth-routing.module';

import { ForthComponent } from './forth.component';
import { ForthChildComponent } from './forth-child/forth-child.component';

@NgModule({
    imports: [
        SharedModule,
        ForthRoutingModule
    ],
    declarations: [
        ForthComponent,
        ForthChildComponent
    ]
})
export class ForthModule { }
