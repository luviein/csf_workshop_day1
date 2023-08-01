import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaneComponent } from './select-pane.component';

describe('SelectPaneComponent', () => {
  let component: SelectPaneComponent;
  let fixture: ComponentFixture<SelectPaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPaneComponent]
    });
    fixture = TestBed.createComponent(SelectPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
