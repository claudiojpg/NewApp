import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Modulo1Page } from './modulo1.page';

describe('Modulo1Page', () => {
  let component: Modulo1Page;
  let fixture: ComponentFixture<Modulo1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Modulo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
