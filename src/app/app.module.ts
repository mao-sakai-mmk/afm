import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';

import { SharedModule } from './shared/shared.module';

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
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        AppRoutes
    ],
    providers: [],
    entryComponents: [AppComponent]
})

export class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef): void {
        appRef.bootstrap(AppComponent);
    }
}
