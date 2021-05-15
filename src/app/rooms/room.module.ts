import { UploadDetailsModule } from '../shared/upload-details/upload-details.module';

import { ImageUploadModule } from '../shared/image-upload/image-upload.module';
import { RoomRoutingModule } from './room-routing.module';
import { NgModule } from '@angular/core';

import { RoomComponent } from './room.component';
import { CreateRoomComponent } from './create-room.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule,
    RoomRoutingModule,
    ImageUploadModule,
    UploadDetailsModule,
  ],
  declarations: [RoomComponent, CreateRoomComponent],
  providers: [],
})
export class RoomModule {}
