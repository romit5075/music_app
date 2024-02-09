import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MylibraryPage } from './mylibrary.page';

describe('MylibraryPage', () => {
  let component: MylibraryPage;
  let fixture: ComponentFixture<MylibraryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MylibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
