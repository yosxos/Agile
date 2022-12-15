import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

import { ProfilComponent } from './profil.component';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;
 let AuthStub: Partial<Auth>;
 let userSup:Partial<UserService>
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[{ provide: UserService, useValue: userSup },
        { provide: Auth, useValue: AuthStub },
      ]})
    .compileComponents();

    fixture = TestBed.createComponent(ProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
