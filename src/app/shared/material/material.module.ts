import { NgModule } from '@angular/core';
import {
    MatSidenavModule, MatListModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule
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
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSelectModule,
        MatSidenavModule,
    ]
})
export class MaterialModule { }
