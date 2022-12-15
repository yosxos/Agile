import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserI } from 'src/app/modeles/user-i';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user:UserI=<UserI>{};
  constructor(private uServ:UserService ,private bdd:Firestore,private auth:Auth) { }

  ngOnInit(): void {
  }
  AddToFire(){
    this.uServ.createAccount(this.user)
  }
}
