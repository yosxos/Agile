import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should authentificate'),()=>{
    const email="pipo@pipo.org";
    const mdp="pipopipo";
    service.identification(email,mdp);
    expect(service.users.Length).toBeGreaterThan(1);
  }
});
