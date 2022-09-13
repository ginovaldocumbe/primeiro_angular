import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixoComponent } from './baixo.component';

describe('BaixoComponent', () => {
  let component: BaixoComponent;
  let fixture: ComponentFixture<BaixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaixoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
