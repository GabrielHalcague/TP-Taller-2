import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/componentes-especificos/navbar/navbar.component';
import { FooterComponent } from './componentes/componentes-especificos/footer/footer.component';
import { CarrouselComponent } from './componentes/componentes-especificos/carrousel/carrousel.component';
import { CarrouselCardsComponent } from './componentes/componentes-especificos/carrousel-cards/carrousel-cards.component';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CarrouselCards2Component } from './componentes/componentes-especificos/carrousel-cards2/carrousel-cards2.component';
import { CarrouselCardsPromosComponent } from './componentes/componentes-especificos/carrousel-cards-promos/carrousel-cards-promos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductoComponent } from './componentes/componentes-especificos/producto/producto.component';
import { PerfilComponent } from './componentes/componentes-especificos/perfil/perfil.compoent';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'producto', component: ProductoComponent }, 
  { path: 'perfil', component: PerfilComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CarrouselCardsComponent,
    HomeComponent,
    ContactoComponent,
    CarrouselCards2Component,
    CarrouselCardsPromosComponent,
    ProductoComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
