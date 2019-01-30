import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPallindromeComponent } from './add-pallindrome.component';

describe('AddPallindromeComponent', () => {
  let component: AddPallindromeComponent;
  let fixture: ComponentFixture<AddPallindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPallindromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPallindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
