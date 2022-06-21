import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StaticoComponent } from './pages/statico/statico.component';
import { DinamicoComponent } from './pages/dinamico/dinamico.component';
import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    StaticoComponent,
    DinamicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
