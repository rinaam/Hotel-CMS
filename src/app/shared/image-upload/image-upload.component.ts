import { Component, Output, EventEmitter } from '@angular/core';
import { FileUpload } from '../../core/models/fileUpload.model';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  selectedFiles?: FileList;

  @Output() onSelectFile: EventEmitter<FileUpload> = new EventEmitter<
    FileUpload
  >();

  selectFile(event: Event): void {
    this.selectedFiles = (<HTMLInputElement>event.target).files as FileList;
    const file = this.selectedFiles?.item(0) as File;
    this.selectedFiles = undefined;

    this.onSelectFile.emit(new FileUpload(file));
  }
}
