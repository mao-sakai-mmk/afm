import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
    imports: [
        DragDropModule,
        ScrollDispatchModule
    ],
    exports: [
        DragDropModule,
        ScrollDispatchModule
    ]
})
export class CdkModule { }
