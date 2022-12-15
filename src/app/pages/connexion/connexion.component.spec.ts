import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ConnexionComponent } from './connexion.component';
describe('ConnexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;
  let userStub: Partial<UserService>
  let httpStub:Partial<HttpClient>
  let routerSub:Partial<Router>
  let formSub:Partial<FormsModule>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [ ConnexionComponent ],
      providers:[{provide:UserService,useValue:userStub},
        {provide:HttpClient,useValue:httpStub},
        {provide:Router,useValue:routerSub},
        {provide:FormsModule,useValue:formSub},
        ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
