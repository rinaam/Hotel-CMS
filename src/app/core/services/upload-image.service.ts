import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
import { FileUpload } from '../models/fileUpload.model';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private basePath = '/uploads';

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  pushFileToStorage(
    fileUpload: FileUpload
  ): {
    percentage: Observable<number | undefined>;
    imageName: string;
  } {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData(fileUpload);
          });
        })
      )
      .subscribe();

    return {
      percentage: uploadTask.percentageChanges(),
      imageName: fileUpload.file.name,
    };
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFile(fileName: string): AngularFireStorageReference {
    return this.storage.ref(this.basePath).child(fileName);
  }

  deleteFile(imageName: string): void {
    this.deleteFileStorage(imageName);
  }

  getImageUrl(imageName: string): Observable<string> {
    return this.storage.ref(this.basePath + '/' + imageName).getDownloadURL();
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
