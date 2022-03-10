import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRightOutpassComponent } from './content-right-outpass.component';

describe('ContentRightOutpassComponent', () => {
  let component: ContentRightOutpassComponent;
  let fixture: ComponentFixture<ContentRightOutpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRightOutpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRightOutpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
