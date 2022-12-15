import { TestBed, tick } from '@angular/core/testing';
import { FirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
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
});
