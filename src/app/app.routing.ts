import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { SecondComponent } from './second/second.component';

const appRoutes: Routes = [
    {
        path: 'hello',
        component: HelloComponent
    },
    {
        path: 'second/:section',
        component: SecondComponent,
    },
    {
        path: 'second',
        redirectTo: 'second/1'
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
