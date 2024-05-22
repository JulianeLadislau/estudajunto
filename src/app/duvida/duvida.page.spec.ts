import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuvidaPage } from './duvida.page';

describe('DuvidaPage', () => {
  let component: DuvidaPage;
  let fixture: ComponentFixture<DuvidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
