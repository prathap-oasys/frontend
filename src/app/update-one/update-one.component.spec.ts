import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneComponent } from './update-one.component';

describe('UpdateOneComponent', () => {
  let component: UpdateOneComponent;
  let fixture: ComponentFixture<UpdateOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOneComponent]
    });
    fixture = TestBed.createComponent(UpdateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
