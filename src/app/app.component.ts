import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
  rooms: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.rooms = firestore.collection('rooms').valueChanges();
  }
}
