import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  onHeaderCollapse() {
    this.collapsed = !this.collapsed;
  }
  constructor() {}

  ngOnInit(): void {}
}
