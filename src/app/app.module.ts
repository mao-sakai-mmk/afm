import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SecondComponent } from './second/second.component';

@NgModule({
    declarations: [
        AppComponent,
        HelloComponent,
        SecondComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
