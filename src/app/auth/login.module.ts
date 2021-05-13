import { AuthGuard } from '../core/services/auth-guard.service';
import { AuthService } from '../core/services/auth.service';

import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuard],
})
export class LoginModule {}
