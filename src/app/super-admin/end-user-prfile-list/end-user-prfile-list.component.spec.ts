import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserPrfileListComponent } from './end-user-prfile-list.component';

describe('EndUserPrfileListComponent', () => {
  let component: EndUserPrfileListComponent;
  let fixture: ComponentFixture<EndUserPrfileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUserPrfileListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserPrfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
