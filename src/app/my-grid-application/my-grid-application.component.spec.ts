import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridApplicationComponent } from './my-grid-application.component';
import { CommonModule } from '@angular/common';

describe('MyGridApplicationComponent', () => {
  let component: MyGridApplicationComponent;
  let fixture: ComponentFixture<MyGridApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGridApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGridApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('grid API is available after `detectChanges`', () => {
      fixture.detectChanges();
      expect(component.gridOptions.api).toBeTruthy();
  });

  it('selected rows will change after select or deselect row', () => {
    const node = component.gridOptions.api.getRowNode('0');
    component.gridOptions.api.selectNode(node);
    const appElement = fixture.nativeElement;
    const selectedRowsElement = appElement.querySelector('.select-row-count .total-count');
    expect(selectedRowsElement.textContent).toEqual('1');
  });
});
