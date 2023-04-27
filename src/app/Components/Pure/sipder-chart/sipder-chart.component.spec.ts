import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipderChartComponent } from './sipder-chart.component';

describe('SipderChartComponent', () => {
  let component: SipderChartComponent;
  let fixture: ComponentFixture<SipderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipderChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SipderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
