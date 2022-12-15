import { Component, OnInit } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public user: UserService, public auth:Auth) { }

  modify=false;

  ngOnInit(): void {
  }

  modification(){
    this.modify = !this.modify;
  }

  async save(){
    this.user.saveUserProfil();
    this.modify = !this.modify;
  }

}
