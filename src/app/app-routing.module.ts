import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; //home
import { DrinksComponent } from './app/menu/drinks/drinks.component'; //drinks
import { CrepesWafflesComponent } from './app/menu/crepes-waffles/crepes-waffles.component';

// definir rutas de navegacion

const routes: Routes = 
[
  {path: '', redirectTo:'/', pathMatch:'full'}, // redireccion url vacios al home
  {path: 'home', component: AppComponent},  //home
  {path: 'drinks', component: DrinksComponent},  // enlace de drinks
  {path: 'CreepsyWaffles', component: CrepesWafflesComponent}  // enlace de drinks
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
