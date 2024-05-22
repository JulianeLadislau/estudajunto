import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExibirPage } from './exibir.page';

describe('ExibirPage', () => {
  let component: ExibirPage;
  let fixture: ComponentFixture<ExibirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
