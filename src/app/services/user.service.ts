import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';

import { IdI, UserI } from '../modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<IdI> = [];

  constructor(private  auth: Auth, private bdd: Firestore) { }

   identification(email: string, mdp: string) {
     signInWithEmailAndPassword(this.auth, email, mdp)
      .then(data => {
        console.log("Utilisateur connecté !", data);
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
        this.addUser(user.uid,user);
      }
    )

    return true;

  }

}
