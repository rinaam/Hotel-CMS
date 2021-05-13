import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}