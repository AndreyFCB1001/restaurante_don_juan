import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Módulo template
import { SharedModule } from './shared/shared.module';
import { MainDishesComponent } from './app/menu/main-dishes/main-dishes.component';
import { DrinksComponent } from './app/menu/drinks/drinks.component';
import { FastFoodsComponent } from './app/menu/fast-foods/fast-foods.component';
import { CrepesWafflesComponent } from './app/menu/crepes-waffles/crepes-waffles.component';
import { AdditionalDishesComponent } from './app/menu/additional-dishes/additional-dishes.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDishesComponent,
    DrinksComponent,
    FastFoodsComponent,
    CrepesWafflesComponent,
    AdditionalDishesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
