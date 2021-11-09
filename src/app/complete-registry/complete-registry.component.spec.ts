import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRegistryComponent } from './complete-registry.component';

describe('CompleteRegistryComponent', () => {
  let component: CompleteRegistryComponent;
  let fixture: ComponentFixture<CompleteRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
