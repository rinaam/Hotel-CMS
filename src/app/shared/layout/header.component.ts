import { AuthService } from './../../core/services/auth.service';
import { Component, Input } from '@angular/core';

import { IHeader } from '../../core/models/header.model';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() headerLinks: IHeader[] = [];
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.logout();
  }
}
