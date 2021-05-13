import { CreateRoomRoutingModule } from './create-room-routing.module';
import { NgModule } from '@angular/core';

import { CreateRoomComponent } from './create-room.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, CreateRoomRoutingModule],
  declarations: [CreateRoomComponent],
  providers: [],
})
export class CreateRoomModule {}
