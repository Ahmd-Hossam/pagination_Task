import { TestBed } from '@angular/core/testing';

import { StudentsGuardGuard } from './students-guard.guard';

describe('StudentsGuardGuard', () => {
  let guard: StudentsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
