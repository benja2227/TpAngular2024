import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { FormsModule } from '@angular/forms';
import { TshoesShoesComponent } from './tshoes-shoes/tshoes-shoes.component';
import { TshoesAboutComponent } from './tshoes-about/tshoes-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    TshoesShoesComponent,
    TshoesAboutComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
