import { AuthGuard } from '../core/services/auth-guard.service';
import { CreateRoomComponent } from './create-room.component';
import { RoomComponent } from './room.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CreateRoomComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: RoomComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
