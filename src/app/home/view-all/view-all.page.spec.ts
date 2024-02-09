import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAllPage } from './view-all.page';

describe('ViewAllPage', () => {
  let component: ViewAllPage;
  let fixture: ComponentFixture<ViewAllPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
