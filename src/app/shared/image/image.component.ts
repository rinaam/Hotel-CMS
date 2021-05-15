import { FileUploadService } from './../../core/services/upload-image.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() imageName!: string;
  @Input() alt!: string;

  imageUrl$!: Observable<string>;
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit() {
    this.imageUrl$ = this.fileUploadService.getImageUrl(this.imageName);
  }
}
