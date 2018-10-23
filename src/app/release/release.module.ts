import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ReleaseRoutingModule } from './release-routing.module';

import { ReleaseComponent } from './release.component';
import { ReleaseSevenOComponent } from './release-seven-o/release-seven-o.component';

@NgModule({
    imports: [
        SharedModule,
        ReleaseRoutingModule
    ],
    declarations: [
        ReleaseComponent,
        ReleaseSevenOComponent
    ]
})
export class ReleaseModule {}
