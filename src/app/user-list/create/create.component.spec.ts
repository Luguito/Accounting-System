import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRollerComponent } from './create.component';

describe('CreateRollerComponent', () => {
  let component: CreateRollerComponent;
  let fixture: ComponentFixture<CreateRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
