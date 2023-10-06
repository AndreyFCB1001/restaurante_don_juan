import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; //home
import { DrinksComponent } from './app/menu/drinks/drinks.component'; //drinks
import { CrepesWafflesComponent } from './app/menu/crepes-waffles/crepes-waffles.component';
import { AdditionalDishesComponent } from './app/menu/additional-dishes/additional-dishes.component';
import { FastFoodsComponent } from './app/menu/fast-foods/fast-foods.component';
import { MainDishesComponent } from './app/menu/main-dishes/main-dishes.component';
import { HomeComponent } from './app/menu/home/home.component';

// definir rutas de navegacion

const routes: Routes = 
[
  {path: '', redirectTo:'/', pathMatch:'full'}, // redireccion url vacios al home
  {path: 'homess', component: HomeComponent},  //home
  {path: 'drinks', component: DrinksComponent},  // enlace de drinks
  {path: 'CreepsyWaffles', component: CrepesWafflesComponent},  // enlace de drinks
  {path: 'Adicionales', component: AdditionalDishesComponent},  // enlace de drinks
  {path: 'Fasfod', component: FastFoodsComponent},  // enlace de drinks
  {path: 'PlatosPrincipales', component: MainDishesComponent},  // enlace de drinks
  {path: 'homess', component: HomeComponent}  // enlace de drinks
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
