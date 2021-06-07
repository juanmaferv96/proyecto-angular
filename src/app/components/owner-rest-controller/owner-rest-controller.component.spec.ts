import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRestControllerComponent } from './owner-rest-controller.component';

describe('OwnerRestControllerComponent', () => {
  let component: OwnerRestControllerComponent;
  let fixture: ComponentFixture<OwnerRestControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerRestControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRestControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
