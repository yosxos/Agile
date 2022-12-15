import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IdI } from 'src/app/modeles/user-i';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  id:IdI = {mail:'', passe:''};


  constructor(private user:UserService, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  /** Identification à l'aide de FireBase */
  checkFromFire(){
    this.user.identification(this.id.mail,this.id.passe);

  }

}
