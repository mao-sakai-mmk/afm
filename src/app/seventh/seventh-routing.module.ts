import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeventhComponent } from './seventh.component';
import { DatePipeComponent } from './seventh-default-pipes/date-pipe/date-pipe.component';
import { DecimalPipeComponent } from './seventh-default-pipes/decimal-pipe/decimal-pipe.component';
import { TextTransPipeComponent } from './seventh-default-pipes/text-trans-pipe/text-trans-pipe.component';
import { SlicePipeComponent } from './seventh-default-pipes/slice-pipe/slice-pipe.component';
import { SeventhOriginPipeComponent } from './seventh-origin-pipe/seventh-origin-pipe.component';

const routes: Routes = [
    {
        path: '',
        component: SeventhComponent,
        children: [
            {
                path: 'date',
                component: DatePipeComponent
            },
            {
                path: 'decimal',
                component: DecimalPipeComponent
            },
            {
                path: 'text-trans',
                component: TextTransPipeComponent
            },
            {
                path: 'slice',
                component: SlicePipeComponent
            },
            {
                path: 'origin',
                component: SeventhOriginPipeComponent
            },
            /**
             * 対象がなかった時
             */
            {
                path: '**',
                redirectTo: 'date'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SeventhRoutingModule { }
