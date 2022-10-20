import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PImageComponent } from './pimage.component';

describe('PImageComponent', () => {
  let component: PImageComponent;
  let fixture: ComponentFixture<PImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
