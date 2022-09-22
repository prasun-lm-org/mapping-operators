import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    HeaderComponent,
    ConcatMapComponent,
    MergeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
