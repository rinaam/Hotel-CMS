import { FileUploadService } from './upload-image.service';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { IRoom } from './../models/rooms.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    private angularFirestore: AngularFirestore,
    private fileUploadService: FileUploadService
  ) {}

  getRooms(): Observable<IRoom[]> {
    return this.angularFirestore
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
  }

  createRoom(payload: IRoom): Promise<any> {
    return this.angularFirestore.collection('rooms').add(payload);
  }

  updateRoom(id: string, payload: IRoom) {
    console.log('upadting', payload);
    return this.angularFirestore
      .collection('rooms')
      .doc('/' + id)
      .update(payload);
  }

  getRoom(id: string): Observable<IRoom> {
    return this.angularFirestore
      .collection('rooms')
      .doc(id)
      .snapshotChanges()
      .pipe(
        map(
          (snaps) =>
            ({
              id: snaps.payload.id,
              ...(snaps.payload.data() as Omit<IRoom, 'id'>),
            } as IRoom)
        )
      );
  }

  deleteRoom(id: string, imageName: string): Promise<void> {
    return this.angularFirestore
      .collection('rooms')
      .doc(id)
      .delete()
      .then(() => {
        this.fileUploadService.deleteFile(imageName);
      });
  }
}
