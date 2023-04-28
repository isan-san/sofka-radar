import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApprenticeComponent } from './add-apprentice.component';

describe('AddApprenticeComponent', () => {
  let component: AddApprenticeComponent;
  let fixture: ComponentFixture<AddApprenticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApprenticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApprenticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
