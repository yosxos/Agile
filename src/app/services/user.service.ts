import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';

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
        this.users.push({ mail: email, passe: mdp })
        return true;
      })
      return false
  }
  
  async addUser(code:string,user:UserI){
    const docUser= doc(this.bdd, 'users', code)
    await setDoc(docUser, user, { merge: true });

  }
  createAccount(user:UserI){
    createUserWithEmailAndPassword(this.auth,user.mail,user.mdp).then(
      (result)=>{
        updateProfile(result.user,
          { displayName:user.nom,
            photoURL:user.avatar,
          }

        )
      }
    )

    return true;

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
