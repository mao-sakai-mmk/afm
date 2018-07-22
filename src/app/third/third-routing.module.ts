import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdNewComponent } from './third-new/third-new.component';
import { ThirdShoppingComponent } from './third-shopping/third-shopping.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'new',
                component: ThirdNewComponent
            },
            {
                path: 'shopping',
                component: ThirdShoppingComponent
            },
            /**
             * 対象がなかった時
             */
            {
                path: '**',
                redirectTo: 'new'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ThirdRoutingModule { }
