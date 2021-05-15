import { ImageModule } from './../shared/image/image.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [SharedModule, HomeRoutingModule, ImageModule],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
