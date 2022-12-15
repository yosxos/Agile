import { TestBed, tick } from '@angular/core/testing';
import { Auth, User } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserI } from '../modeles/user-i';
import { UserService } from './user.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let service: UserService;
  let FireStoreStub: Partial<Firestore>;
  let AuthStub: Partial<Auth>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[{ provide: Firestore, useValue: FireStoreStub },
        { provide: Auth, useValue: AuthStub },

      ],
    });
    service = TestBed.inject(UserService)

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should authentificate'), ()=>{
    const email="test@projet.com";
    const mdp="123456789";

     const result=service.identification(email,mdp);
     expect(result).toEqual(true);
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
