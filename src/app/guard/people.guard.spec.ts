import { TestBed } from '@angular/core/testing';

import { PeopleGuard } from './people.guard';

describe('PeopleGuard', () => {
  let guard: PeopleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PeopleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
