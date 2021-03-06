import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconList } from 'src/app/core/mock/icon.list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public sidenavState: boolean = false;
  @Output() toggleSidenav: EventEmitter<boolean> = new EventEmitter();

  public iconList = IconList;

  constructor() {}

  openSideNav(): void {
    this.toggleSidenav.emit(true);
  }

  public getMenuIcon(): string {
    return this.sidenavState ? 'close' : 'menu';
  }
}
