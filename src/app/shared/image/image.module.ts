import { SharedModule } from './../shared.module';
import { ImageComponent } from './image.component';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [SharedModule],
  declarations: [ImageComponent],
  exports: [ImageComponent],
  providers: [],
})
export class ImageModule {}
