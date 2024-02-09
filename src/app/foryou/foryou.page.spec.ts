import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForyouPage } from './foryou.page';

describe('ForyouPage', () => {
  let component: ForyouPage;
  let fixture: ComponentFixture<ForyouPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForyouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
