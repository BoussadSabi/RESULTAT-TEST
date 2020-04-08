import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';                      //important pour creer les routes entre les composants 01 puis importer RouterModule pour utiliser la fonction forRoot qui appel la constantes des route quon a declarer
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SuppressionComponent } from './suppression/suppression.component';
import { ModificationComponent } from './modification/modification.component';
import { AffichageComponent } from './affichage/affichage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthserviceService} from './authservice.service';
import {PangolinService} from './pangolin.service';




// creer cette constante qde type routes qui contient toutes les route de l'application
//path'' corespont a localhost4200 on peu definir en haut juste localhost:4200/ ou  localhost:4200/blog  c à dire localhost on peu le definir comme on veut des le depart
//cette constante ROUTES sera appeler et utilisé par forRoot fonction de RouterModule
const ROUTES: Routes=[
              {path:'', component: HomeComponent},
              {path:'blog', component: BlogComponent},
              {path:'about', component: AboutComponent},
              {path:'affichage', component: AffichageComponent},
              {path:'modification', component: ModificationComponent},
              {path:'suppression', component: SuppressionComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    SuppressionComponent,
    ModificationComponent,
    AffichageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),   //cette fonction appel la constante qui contient toutes qui content toutes les routes de notre application
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
   AuthserviceService,
   PangolinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
