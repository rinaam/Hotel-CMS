import { AuthService } from './core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
      to: 'create',
    },
  ];

  isLoggedIn$: Observable<boolean> = this.authService.loggedIn$;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
