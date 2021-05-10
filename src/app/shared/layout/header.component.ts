import { Component, OnInit, Input } from '@angular/core';

import { IHeader } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerLinks: IHeader[] = [];
  constructor() {}

  ngOnInit() {}
}
