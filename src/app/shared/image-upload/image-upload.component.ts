import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileUploadService } from '../../core/services/upload-image.service';
import { FileUpload } from '../../core/models/fileUpload.model';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload!: FileUpload;
  percentage: number = 0;

  @Output() onImageUpload: EventEmitter<string> = new EventEmitter<string>();

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {}

  selectFile(event: Event): void {
    this.selectedFiles = (<HTMLInputElement>event.target).files as FileList;
    const file = this.selectedFiles?.item(0) as File;
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    const { percentage, imageUrl } = this.uploadService.pushFileToStorage(
      this.currentFileUpload
    );

    percentage.subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage as number);
      },
      (error) => {
        console.log(error);
      }
    );
    imageUrl.subscribe((url) => this.onImageUpload.emit(url));
  }
}
