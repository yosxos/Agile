import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { IdI } from '../modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<IdI> = [];

  constructor(private readonly auth: Auth, private bdd: Firestore) { }

   identification(email: string, mdp: string) {
     signInWithEmailAndPassword(this.auth, email, mdp)
      .then(data => {
        console.log("Utilisateur connecté !", data);
        this.users.push({ mail: email, passe: mdp })
      })
      .catch(err => console.log(err));
  }

}
