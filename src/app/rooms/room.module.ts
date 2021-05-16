import { ImageModule } from './../shared/image/image.module';

import { ImageUploadModule } from '../shared/image-upload/image-upload.module';
import { RoomRoutingModule } from './room-routing.module';
import { NgModule } from '@angular/core';

import { RoomComponent } from './room.component';
import { CreateRoomComponent } from './create-room.component';
import { EditRoomComponent } from './edit-room.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, RoomRoutingModule, ImageUploadModule, ImageModule],
  declarations: [RoomComponent, CreateRoomComponent, EditRoomComponent],
  providers: [],
})
export class RoomModule {}
