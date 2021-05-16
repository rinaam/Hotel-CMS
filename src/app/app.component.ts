import { AuthService } from './core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Hotel-CMS';

  headerLinks = [
    {
      title: 'Home',
      to: 'home',
    },
    {
      title: 'Create Room',
      to: 'room',
    },
  ];

  isLoggedIn$: Observable<boolean> = this.authService.loggedIn$;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
