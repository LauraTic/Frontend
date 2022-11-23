import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaTblComponent } from './prueba-tbl.component';

describe('PruebaTblComponent', () => {
  let component: PruebaTblComponent;
  let fixture: ComponentFixture<PruebaTblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaTblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
