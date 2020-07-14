import {Component, Input, OnInit} from '@angular/core';
import {APIService} from '../API.service';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userId: any;
  @Input() messageCount;
  username: any;
  imageUrl: any;
  progressbar: number;
  user: User;

  constructor(private api: APIService, public router: Router) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.username = user.username;
      this.userId = user.attributes.sub;
      this.imageUrl = user.attributes.imageUrl;
    });
  }
getUser($event) {
    this.user = $event;
}

}
