import { Observable } from 'rxjs';
import { FileUpload } from './../../core/models/fileUpload.model';
import { FileUploadService } from './../../core/services/upload-image.service';
import { Component, OnInit, Input } from '@angular/core';
import { IData } from '../../core/models/fileUpload.model';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss'],
})
export class UploadDetailsComponent implements OnInit {
  @Input() fileName!: string;

  imageUrl$!: Observable<string>;
  imageMetadata$!: Observable<IData>;

  constructor(private uploadService: FileUploadService) {}

  ngOnInit(): void {
    this.imageUrl$ = this.uploadService.getFile(this.fileName).getDownloadURL();
    this.imageMetadata$ = this.uploadService
      .getFile(this.fileName)
      .getMetadata();
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
