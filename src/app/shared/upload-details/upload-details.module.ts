import { UploadDetailsComponent } from './upload-details.component';
import { SharedModule } from './../shared.module';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [SharedModule],
  declarations: [UploadDetailsComponent],
  exports: [UploadDetailsComponent],
  providers: [],
})
export class UploadDetailsModule {}
