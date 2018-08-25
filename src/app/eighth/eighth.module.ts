import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EighthRoutingModule } from './eighth-routing.module';

import { EighthComponent } from './eighth.component';
import { EighthHostBindingComponent } from './eighth-host-binding/eighth-host-binding.component';
import { EighthHostListenerComponent } from './eighth-host-listener/eighth-host-listener.component';
import { EighthHostExampleComponent } from './eighth-host-example/eighth-host-example.component';
import { EighthAnimationComponent } from './eighth-animation/eighth-animation.component';
import { HostBindChildComponent } from './eighth-host-binding/host-bind-child/host-bind-child.component';

import { HostListenInputDirective } from './eighth-host-listener/host-listen-input.directive';
import { AvatorSelectDirective } from './eighth-host-example/avator-select.directive';

@NgModule({
    imports: [
        SharedModule,
        EighthRoutingModule
    ],
    declarations: [
        EighthComponent,
        EighthHostBindingComponent,
        EighthHostListenerComponent,
        EighthHostExampleComponent,
        EighthAnimationComponent,
        HostBindChildComponent,
        HostListenInputDirective,
        AvatorSelectDirective,
    ]
})
export class EighthModule { }
