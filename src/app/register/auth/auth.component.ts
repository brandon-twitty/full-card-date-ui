import {Component, OnInit, ViewChild} from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {ActivationStart, NavigationExtras, Router, RouterOutlet} from '@angular/router';
import {Auth} from 'aws-amplify';
import {async} from 'rxjs/internal/scheduler/async';
import {resolve} from 'url';
import {User} from '../../shared/models/user';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  state: any;
  navigationParams: any;
  newUser: any;
  userId: any;
  username: any;
  password: any;
  authState: any;
  // user: User;
  showLoginComponent: boolean = false;
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  constructor(public amplifyService: AmplifyService, public router: Router){
    const navigation = this.router.getCurrentNavigation();
    this.state = navigation.extras.state;
  }
    ngOnInit(): void {
      this.authState = {loggedIn: false};
      this.amplifyService.authStateChange$
          .subscribe(authState => {
            console.log('twittys Auth state = ', authState.state);
            const user = Auth.currentUserInfo();
            console.log('authorized user =', user);
            this.goToProfileOrDashboard();
            if (authState.state === 'signedIn') {
              const navigationParams: NavigationExtras = {
                state: {
                  userId: Auth.currentUserInfo()
                }
              };
              this.router.navigate(['/dashboard'], navigationParams);
            }
          });
      this.showLoginComponent = true;
      this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === 'register') {
                this.outlet.deactivate();
            }
        });
    }
    goToProfileOrDashboard(){
      console.log('the state params', this.state);
    }
}
