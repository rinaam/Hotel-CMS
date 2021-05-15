import { IRoom } from './../core/models/rooms.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  constructor(private angularFirestore: AngularFirestore) {}

  ngOnInit() {}
}
