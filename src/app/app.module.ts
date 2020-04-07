import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Alertas } from './shared/classes/alertas';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Alertas],
  bootstrap: [AppComponent]
})
export class AppModule { }
