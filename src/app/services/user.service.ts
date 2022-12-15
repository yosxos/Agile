import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
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

  async saveUserProfil(){
    console.log(this.auth.currentUser!.uid);
    // Création d'un lien vers un document spécifique vers la bdd Firestore : la bdd, la collection, l'id du document
    const docUser = doc(this.bdd, 'users', this.auth.currentUser!.uid);
    //mettre a jour un utilisateur
    await setDoc(docUser, this.profil, {merge:true})
    // Modifier les données de l'utilisateur de firebase authentification
    await updateProfile(this.auth.currentUser!, {displayName : this.profil.nom})
    .then(r => console.log("Les données ont été mises à jour",this.profil))
    .catch(err => console.log(err));
  }

}
