import { ImageModule } from './../image/image.module';
import { SharedModule } from './../shared.module';
import { ImageUploadComponent } from './image-upload.component';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [SharedModule, ImageModule],
  declarations: [ImageUploadComponent],
  exports: [ImageUploadComponent],
  providers: [],
})
export class ImageUploadModule {}
