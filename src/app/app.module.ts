import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddItemComponent } from './add-item/add-item.component';
import { FindItemComponent } from './find-item/find-item.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { GetBillComponent } from './get-bill/get-bill.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShowMapComponent } from './show-map/show-map.component';
import { AngularFireModule, FirebaseApp } from "@angular/fire";
import { FirebaseService } from './services/firebase.service';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    AddItemComponent,
    FindItemComponent,
    GetBillComponent,
    FeedbackComponent,
    ShowMapComponent,
    LogoutComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgQrScannerModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCTaUXkNEuqKk7vKFMLtueOMSjqRbZp84g",
      authDomain: "fir-angular-auth-d56fc.firebaseapp.com",
      databaseURL: "https://fir-angular-auth-d56fc.firebaseio.com",
      projectId: "fir-angular-auth-d56fc",
      storageBucket: "fir-angular-auth-d56fc.appspot.com",
      messagingSenderId: "96364908205",
      appId: "1:96364908205:web:6b152593d31fd1f1a10024"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
