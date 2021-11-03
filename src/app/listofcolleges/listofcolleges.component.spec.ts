import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcollegesComponent } from './listofcolleges.component';

describe('ListofcollegesComponent', () => {
  let component: ListofcollegesComponent;
  let fixture: ComponentFixture<ListofcollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofcollegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
