import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ColorPickerModule } from 'ngx-color-picker';

import { MaterialModule } from './material/material.module';
import { CdkModule } from './cdk/cdk.module';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        CdkModule,
        ColorPickerModule
    ]
})
export class SharedModule { }
