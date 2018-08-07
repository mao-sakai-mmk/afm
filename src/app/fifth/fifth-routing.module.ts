import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FifthComponent } from './fifth.component';
import { FifthCssBindComponent } from './fifth-css-bind/fifth-css-bind.component';
import { FifthTempComponent } from './fifth-temp/fifth-temp.component';

const routes: Routes = [
    {
        path: '',
        component: FifthComponent,
        children: [
            {
                path: 'temp',
                component: FifthTempComponent
            },
            {
                path: 'css-bind',
                component: FifthCssBindComponent
            },
            /**
             * 対象がなかった時
             */
            {
                path: '**',
                redirectTo: 'temp'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FifthRoutingModule { }
