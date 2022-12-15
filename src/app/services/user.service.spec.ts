import { TestBed, tick } from '@angular/core/testing';
import { FirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { Auth, User } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserI } from '../modeles/user-i';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let auth: any = Auth;
  let bdd: any = Firestore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[UserService,],
    });
    service = new UserService(auth,bdd)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should authentificate'), ()=>{
    const email="test@projet.com";
    const mdp="123456789";
    tick(1000)
     service.identification(email,mdp);
    expect(service.users.length).toBeGreaterThan(1);
  }
  it('creates an account', () => {
    let user:UserI={
      uid: "xxxxx",
      nom: "test",
      mdp:"test",
      avatar:"test",
      mail:"test",
      tel:"test",
      club: "test",
      status:"test",

    }
    const result = service.createAccount(user);

    expect(result).toEqual(true);
});
});
