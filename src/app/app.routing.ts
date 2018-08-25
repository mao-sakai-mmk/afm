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
    {
        path: 'third',
        loadChildren: './third/third.module#ThirdModule'
    },
    {
        path: 'forth',
        loadChildren: './forth/forth.module#ForthModule'
    },
    {
        path: 'fifth',
        loadChildren: './fifth/fifth.module#FifthModule'
    },
    {
        path: 'sixth',
        loadChildren: './sixth/sixth.module#SixthModule'
    },
    {
        path: 'seventh',
        loadChildren: './seventh/seventh.module#SeventhModule'
    },
    {
        path: 'eighth',
        loadChildren: './eighth/eighth.module#EighthModule'
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
