import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SeventhRoutingModule } from './seventh-routing.module';

import { SeventhComponent } from './seventh.component';
import { SeventhOriginPipeComponent } from './seventh-origin-pipe/seventh-origin-pipe.component';
import { DatePipeComponent } from './seventh-default-pipes/date-pipe/date-pipe.component';
import { DecimalPipeComponent } from './seventh-default-pipes/decimal-pipe/decimal-pipe.component';
import { TextTransPipeComponent } from './seventh-default-pipes/text-trans-pipe/text-trans-pipe.component';
import { SlicePipeComponent } from './seventh-default-pipes/slice-pipe/slice-pipe.component';

import { TaxPipe } from './seventh-origin-pipe/tax.pipe';

@NgModule({
    imports: [
        SharedModule,
        SeventhRoutingModule
    ],
    declarations: [
        SeventhComponent,
        SeventhOriginPipeComponent,
        DatePipeComponent,
        DecimalPipeComponent,
        TextTransPipeComponent,
        SlicePipeComponent,
        TaxPipe
    ]
})
export class SeventhModule { }
