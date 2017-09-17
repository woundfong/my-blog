import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupWebsiteByNgComponent } from './setup-website-by-ng.component';

describe('SetupWebsiteByNgComponent', () => {
  let component: SetupWebsiteByNgComponent;
  let fixture: ComponentFixture<SetupWebsiteByNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupWebsiteByNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupWebsiteByNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
