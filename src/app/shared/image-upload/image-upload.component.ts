import { Component, Output, EventEmitter } from '@angular/core';
import { FileUpload } from '../../core/models/fileUpload.model';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  selectedFiles?: FileList;

  @Output() selectedFile: EventEmitter<FileUpload> = new EventEmitter<
    FileUpload
  >();

  selectFile(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement).files as FileList;
    const file = this.selectedFiles?.item(0) as File;
    this.selectedFiles = undefined;

    this.selectedFile.emit(new FileUpload(file));
  }
}
