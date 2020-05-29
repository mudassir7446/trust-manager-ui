import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRationKitComponent } from './add-ration-kit.component';

describe('AddRationKitComponent', () => {
  let component: AddRationKitComponent;
  let fixture: ComponentFixture<AddRationKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRationKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRationKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
