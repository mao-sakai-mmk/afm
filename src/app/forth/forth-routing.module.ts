import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForthComponent } from './forth.component';

const routes: Routes = [
    {
        path: '',
        component: ForthComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForthRoutingModule { }
