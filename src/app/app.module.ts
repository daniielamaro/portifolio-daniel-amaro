import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Alertas } from './shared/classes/alertas';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    InicioComponent,
    MenuComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [Alertas],
  bootstrap: [AppComponent]
})
export class AppModule { }
