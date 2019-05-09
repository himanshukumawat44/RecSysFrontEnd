import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { GetUrlService } from './get-url.service';
import { DummyDataServiceService } from './dummy-data-service.service';
import { LoginServiceService } from './login-service.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { LocalStorageService } from './local-storage.service';
import { AuthGuardService } from './auth-guard.service';
import { LogoutService } from './logout.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        component : LoginComponent
      },
      {
        path : 'portal',
        component : PortalComponent,
        canActivate: [AuthGuardService]
      },
      {
        path : 'loading',
        component : SpinnerComponent
      }
    ])
  ],
  providers: [GetUrlService,DummyDataServiceService,LoginServiceService,LocalStorageService,AuthGuardService, LogoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
