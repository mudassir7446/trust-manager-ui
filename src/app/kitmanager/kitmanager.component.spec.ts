import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitManagerComponent } from './kitmanager.component';

describe('KitManagerComponent', () => {
  let component: KitManagerComponent;
  let fixture: ComponentFixture<KitManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
