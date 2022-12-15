import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from 'firebase/firestore';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(public user: UserService, public auth:Auth) { }

  ngOnInit(): void {
  }

}
