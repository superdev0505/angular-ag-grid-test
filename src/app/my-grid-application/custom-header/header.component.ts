import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class CustomHeaderComponent {
  public params: any;

  private selected = false;

  agInit(params): void {
    this.params = params;
  }

  menuSelectClick() {
    if (this.selected === true) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }

}
