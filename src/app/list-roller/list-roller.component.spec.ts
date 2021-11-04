import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRollerComponent } from './list-roller.component';

describe('ListRollerComponent', () => {
  let component: ListRollerComponent;
  let fixture: ComponentFixture<ListRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
