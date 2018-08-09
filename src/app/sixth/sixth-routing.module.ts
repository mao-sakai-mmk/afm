import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SixthComponent } from './sixth.component';
import { SixthApiComponent } from './sixth-api/sixth-api.component';
import { SixthMessageComponent } from './sixth-message/sixth-message.component';

const routes: Routes = [
    {
        path: '',
        component: SixthComponent,
        children: [
            {
                path: 'message',
                component: SixthMessageComponent
            },
            {
                path: 'api',
                component: SixthApiComponent
            },
            /**
             * 対象がなかった時
             */
            {
                path: '**',
                redirectTo: 'message'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SixthRoutingModule { }
