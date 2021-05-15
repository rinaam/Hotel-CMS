import { IRoom } from './../core/models/rooms.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rooms: Observable<IRoom[]> = this.angularFirestore
    .collection('rooms')
    .snapshotChanges()
    .pipe(
      map((snaps) =>
        snaps.map((snap) => {
          return {
            id: snap.payload.doc.id,
            ...(snap.payload.doc.data() as {}),
          } as IRoom;
        })
      )
    );
  constructor(
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  getDetails(id: string) {
    this.router.navigate(['/room', id]);
  }

  deleteRoom(id: string) {
    this.angularFirestore.collection('rooms').doc(id).delete();
  }
}
