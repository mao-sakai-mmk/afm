import { NgModule } from '@angular/core';
import {
    MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
    ]
})
export class MaterialModule { }
