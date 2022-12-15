import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let AuthSup:Partial<Auth>
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers:[{provide:Auth,useValue:AuthSup}],

    })
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
