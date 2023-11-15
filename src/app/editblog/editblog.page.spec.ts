import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { EditblogPage } from './editblog.page';

describe('EditblogPage', () => {
  let component: EditblogPage;
  let fixture: ComponentFixture<EditblogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
