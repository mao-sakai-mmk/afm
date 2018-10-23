import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseComponent } from './release.component';
import { ReleaseSevenOComponent } from './release-seven-o/release-seven-o.component';

const routes: Routes = [
    {
        path: '',
        component: ReleaseComponent,
        children: [
            {
                path: '7.0',
                component: ReleaseSevenOComponent
            },
            {
                path: '**',
                redirectTo: '7.0'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReleaseRoutingModule { }
