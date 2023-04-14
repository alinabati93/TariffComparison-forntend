import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffResultComponent } from './tariff-result.component';

describe('TariffResultComponent', () => {
  let component: TariffResultComponent;
  let fixture: ComponentFixture<TariffResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariffResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
