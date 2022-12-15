import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { IdI, UserI } from '../modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<IdI> = [];

  // Profil de l'utilisateur
  profil:UserI = <UserI>{};

  constructor(private readonly auth: Auth, private bdd: Firestore, private router: Router) { }

   identification(email: string, mdp: string) {
     signInWithEmailAndPassword(this.auth, email, mdp)
      .then(data => {
        console.log("Utilisateur connecté !", data);
        this.getFireProfil(this.auth.currentUser!.uid);
        this.router.navigateByUrl('/profil');
      })
      .catch(err => console.log(err));
  }

  /** Récupérer le profil dans firestore */
  async getFireProfil(uid:string){
    const docProfil = doc(this.bdd,'users', uid);
    await getDoc(docProfil).then(
      u=> {
        this.profil = u.data() as UserI;
      }
    )
    .catch(err => console.log(err))
  }

}
