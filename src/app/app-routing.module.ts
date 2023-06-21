import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

// LazyLoad: Permite de manera perezosa cargar un módulo. Esto significa cargarlo bajo demanda (cuando el usuario lo solicita) y luego queda en memoria. Para ello en vez de componente hemos puesto = loadChildren: () => import('./countries/countries.module').then( module => module.CountriesModule )  --> puedes poner module o m

const routes: Routes = [
/*   {
    path:'',
    component: HomePageComponent
  }, */
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'contact',
    component: ContactPageComponent
  },
  {
    path:'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path:'**',
    redirectTo: 'countries'
  },
]

//forRoot lo pone porque es el enrutado principal, cuando sean enrutados secundarios de la aplicación pondrá forChild

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
