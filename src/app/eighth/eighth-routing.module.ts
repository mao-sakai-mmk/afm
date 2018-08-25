import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EighthComponent } from './eighth.component';
import { EighthHostBindingComponent } from './eighth-host-binding/eighth-host-binding.component';
import { EighthHostListenerComponent } from './eighth-host-listener/eighth-host-listener.component';
import { EighthAnimationComponent } from './eighth-animation/eighth-animation.component';
import { EighthHostExampleComponent } from './eighth-host-example/eighth-host-example.component';

const routes: Routes = [
    {
        path: '',
        component: EighthComponent,
        children: [
            {
                path: 'host-bind',
                component: EighthHostBindingComponent
            },
            {
                path: 'host-listen',
                component: EighthHostListenerComponent
            },
            {
                path: 'host-ex',
                component: EighthHostExampleComponent
            },
            {
                path: 'anime',
                component: EighthAnimationComponent
            },
            /**
             * 対象がなかった時
             */
            {
                path: '**',
                redirectTo: 'host-bind'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EighthRoutingModule { }
