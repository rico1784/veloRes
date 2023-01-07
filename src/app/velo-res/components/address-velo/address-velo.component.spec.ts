import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressVeloComponent } from './address-velo.component';

describe('AddressVeloComponent', () => {
  let component: AddressVeloComponent;
  let fixture: ComponentFixture<AddressVeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressVeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressVeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
