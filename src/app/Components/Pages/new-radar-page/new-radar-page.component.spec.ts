import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRadarPageComponent } from './new-radar-page.component';

describe('NewRadarPageComponent', () => {
  let component: NewRadarPageComponent;
  let fixture: ComponentFixture<NewRadarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRadarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRadarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
