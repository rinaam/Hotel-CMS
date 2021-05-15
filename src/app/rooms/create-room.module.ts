import { UploadDetailsModule } from './../shared/upload-details/upload-details.module';

import { ImageUploadModule } from './../shared/image-upload/image-upload.module';
import { CreateRoomRoutingModule } from './create-room-routing.module';
import { NgModule } from '@angular/core';

import { CreateRoomComponent } from './create-room.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    CreateRoomRoutingModule,
    ImageUploadModule,
    UploadDetailsModule,
  ],
  declarations: [CreateRoomComponent],
  providers: [],
})
export class CreateRoomModule {}
