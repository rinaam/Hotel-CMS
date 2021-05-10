import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';

import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule],
  declarations: [AuthComponent],
  providers: [],
})
export class AuthModule {}
