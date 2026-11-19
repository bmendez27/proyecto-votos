import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDestino } from './form-destino';

describe('FormDestino', () => {
  let component: FormDestino;
  let fixture: ComponentFixture<FormDestino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDestino],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDestino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
