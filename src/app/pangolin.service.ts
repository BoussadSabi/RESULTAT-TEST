import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})



export class PangolinService {

  pangolin = [
           {index:1,
            name:'Alina',
            mail:'alina@gmail.com',
            sexe :'Femme',
            age:'25',
            race:'Europ',
            nourriture:'Vegitariene'
           },

           ];


}

// il faut declarer  4 methode pour ajouter supprimer afficher modifier un pangolin
