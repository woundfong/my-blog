import { TestBed, inject } from '@angular/core/testing';

import { LeaveMessageService } from './leave-message.service';

describe('LeaveMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveMessageService]
    });
  });

  it('should be created', inject([LeaveMessageService], (service: LeaveMessageService) => {
    expect(service).toBeTruthy();
  }));
});
