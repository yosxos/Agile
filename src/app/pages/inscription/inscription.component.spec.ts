import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionComponent } from './inscription.component';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { UserI } from 'src/app/modeles/user-i';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
describe('InscriptionComponent', () => {
  let component: InscriptionComponent;
  let fixture: ComponentFixture<InscriptionComponent>;
  let FireStoreStub: Partial<Firestore>;
  let AuthStub: Partial<Auth>;
  let UserStub:Partial<UserI>
  let formSub:Partial<FormsModule>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ InscriptionComponent ],
      providers:[{ provide: Firestore, useValue: FireStoreStub },
        { provide: Auth, useValue: AuthStub },
        { provide: UserService, useValue: UserStub },
        {provide:FormsModule,useValue:formSub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
