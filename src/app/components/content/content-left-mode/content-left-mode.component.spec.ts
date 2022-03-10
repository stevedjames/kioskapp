import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLeftModeComponent } from './content-left-mode.component';

describe('ContentLeftModeComponent', () => {
  let component: ContentLeftModeComponent;
  let fixture: ComponentFixture<ContentLeftModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLeftModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLeftModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
