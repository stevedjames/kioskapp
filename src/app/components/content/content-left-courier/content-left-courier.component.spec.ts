import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLeftCourierComponent } from './content-left-courier.component';

describe('ContentLeftCourierComponent', () => {
  let component: ContentLeftCourierComponent;
  let fixture: ComponentFixture<ContentLeftCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLeftCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
