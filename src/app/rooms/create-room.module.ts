import { NgModule } from '@angular/core';

import { CreateRoomComponent } from './create-room.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule],
  declarations: [CreateRoomComponent],
  providers: [],
})
export class CreateRoomModule {}
