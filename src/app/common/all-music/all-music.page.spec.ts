import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllMusicPage } from './all-music.page';

describe('AllMusicPage', () => {
  let component: AllMusicPage;
  let fixture: ComponentFixture<AllMusicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
