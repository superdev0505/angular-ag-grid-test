import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderComponent } from './header.component';

describe('CustomHeaderComponent', () => {
  let component: CustomHeaderComponent;
  let fixture: ComponentFixture<CustomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select all rows', () => {
    component.menuSelectClick();
    const selectedRows = component.params.api.getSelectedRows();
    expect(selectedRows).toEqual(50);
  });

  it('should deselect all rows', () => {
    component.menuSelectClick();
    const selectedRows = component.params.api.getSelectedRows();
    expect(selectedRows).toEqual(0);
  });
});
