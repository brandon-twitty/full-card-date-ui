import {Component, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, NavigationExtras, Params, Router} from '@angular/router';
import {LightUser} from '../shared/models/light-user';
import {InitialConvo} from '../shared/models/initial-convo';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  imageUrl: string;
  lightUsersName: any;
  nameForm: FormGroup;
  routeParams: Params;
  // user: User = new User();

  constructor(private api: APIService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state;
    this.getRouteParams();
    this.getUserByUrlParameter();
  }

  ngOnInit() {
    // getUserImageUrlById()
    this.createNameForm();
  }
  getRouteParams() {
    // Route parameters
    this.activatedRoute.params.subscribe( params => {
      this.routeParams = params;
    });
  }
  getUserByUrlParameter(){
    const cardId = this.routeParams;
    this.userService.getUserByCardId(cardId).subscribe(data => {
      console.log(data);
    });
  }
  createNameForm(){
    this.nameForm = this.fb.group({
      ltFirstName: ['']
    });
  }
  nextTab(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {
        lightUsersName: this.nameForm.controls.ltFirstName.value
      }
    };
    console.log('Tab 1 navigation State', navigationExtras);
    this.router.navigate([tabRoute], navigationExtras);
  }
  getUserImageUrlById(){

  }
}
