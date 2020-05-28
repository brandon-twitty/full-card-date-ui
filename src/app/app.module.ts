import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
/*custom amplify angular imports*/

// import Amplify from 'aws-amplify';
// import awsconfig from '../aws-exports';

import {AmplifyAngularModule} from 'aws-amplify-angular';

/* Configure Amplify resources */
// Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AmplifyAngularModule,
      AmplifyUIAngularModule,
            IonicModule.forRoot(),
            AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
