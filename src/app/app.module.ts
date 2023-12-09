import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QueHacemosComponent } from './que-hacemos/que-hacemos.component';


import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactoComponent,
    AppComponent,
    QueHacemosComponent,
    NavbarComponent,
    FooterComponent
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
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

initTE({ Collapse, Dropdown, Carousel });
