import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProPage } from './pro.page';

describe('ProPage', () => {
  let component: ProPage;
  let fixture: ComponentFixture<ProPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
