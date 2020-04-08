import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

isAuth = false;       //variable boolean

//pour la connection de lutilisateur boutton connecter ds 2seconde
signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            console.log("connexion reussi");
            this.isAuth = true;         //changer le boolean connecter en true lobjectif du click et de la fonction
            resolve(true);
          }, 2000
        );
      }
    );
  }



}
