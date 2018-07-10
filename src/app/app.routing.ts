import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';

const appRoutes: Routes = [
    {
        path: 'hello',
        component: HelloComponent
    },
    /**
     * 対象がなかった時
     */
    {
        path: '**',
        redirectTo: 'hello'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }
