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
  rooms: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.rooms = firestore.collection('rooms').valueChanges();
  }
}
