import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PallindromeListComponent } from './pallindrome-list.component';

describe('PallindromeListComponent', () => {
  let component: PallindromeListComponent;
  let fixture: ComponentFixture<PallindromeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PallindromeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PallindromeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
