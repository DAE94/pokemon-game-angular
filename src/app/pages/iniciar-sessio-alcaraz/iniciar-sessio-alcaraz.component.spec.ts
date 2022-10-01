import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioAlcarazComponent } from './iniciar-sessio-alcaraz.component';

describe('IniciarSessioAlcarazComponent', () => {
  let component: IniciarSessioAlcarazComponent;
  let fixture: ComponentFixture<IniciarSessioAlcarazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioAlcarazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioAlcarazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
