import { FileUploadService } from './../../core/services/upload-image.service';
import { Observable, of } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/core/models/fileUpload.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() imageName?: string;
  @Input() alt!: string;
  @Input() file?: FileUpload;

  imageUrl$!: Observable<string>;
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {
    if (this.imageName) {
      this.imageUrl$ = this.fileUploadService.getImageUrl(this.imageName);
    } else if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file.file);
      reader.onload = () => {
        this.imageUrl$ = of(reader.result as string);
      };
    }
  }
}
