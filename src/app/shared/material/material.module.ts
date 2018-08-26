import { NgModule } from '@angular/core';
import {
    MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule { }
