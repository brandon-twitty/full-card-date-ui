import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthStateService} from './shared/services/auth-state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authStateService: AuthStateService
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      /*this.authStateService.getObservable().subscribe((data) =>{
        console.log('Data received', data)
      })*/
    });
  }
  sideMenu(){
    this.navigate = [
        {
      title: "Profile",
      url: "/profile",
      icon: "contact"
    },
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: "home"
      },
      {
        title: "Order Cards",
        url:"/create-cards",
        icon: "barcode-outline"
      },
      {
        title: "My Connections",
        url:"/my-connections",
        icon: "contacts"
      },
      {
        title: "Login",
        url:"/register/login",
        icon: "home"
      }
    ]
  }
}
