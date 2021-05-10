import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
