import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';


import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    AppComponent,
    QueHacemosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Nosotros', component: NosotrosComponent },
      {path: 'Home' , component: HomeComponent},
      {path: 'Servicios', component: ServiciosComponent},
      {path: 'Contacto', component: ContactoComponent},
      {path: 'Que Hacemos', component:QueHacemosComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import {
  Collapse,
  Carousel,
  Dropdown,
  initTE,
} from "tw-elements";

initTE({ Collapse, Dropdown, Carousel });
