import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SixthRoutingModule } from './sixth-routing.module';

import { SixthComponent } from './sixth.component';
import { SixthApiComponent } from './sixth-api/sixth-api.component';
import { SixthMessageComponent } from './sixth-message/sixth-message.component';

@NgModule({
    imports: [
        SharedModule,
        SixthRoutingModule
    ],
    declarations: [
        SixthComponent,
        SixthApiComponent,
        SixthMessageComponent
    ]
})
export class SixthModule { }
