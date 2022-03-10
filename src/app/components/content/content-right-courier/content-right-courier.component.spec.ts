import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRightCourierComponent } from './content-right-courier.component';

describe('ContentRightCourierComponent', () => {
  let component: ContentRightCourierComponent;
  let fixture: ComponentFixture<ContentRightCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRightCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRightCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
