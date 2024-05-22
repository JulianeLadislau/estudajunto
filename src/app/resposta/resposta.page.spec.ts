import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RespostaPage } from './resposta.page';

describe('RespostaPage', () => {
  let component: RespostaPage;
  let fixture: ComponentFixture<RespostaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
