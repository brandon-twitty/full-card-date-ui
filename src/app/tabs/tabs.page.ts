import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InitialConvo} from '../shared/models/initial-convo';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  initialConvo: InitialConvo = new InitialConvo();
  ltFirstName: any;
  ltPhoneNumber: any;
  initialMessage: any;

  constructor(private router: Router) {
  }
  routeToTab(tabRoute: string){
    const navigationExtras: NavigationExtras = {
      state: {initialConvo: this.initialConvo}
    };
    console.log('tabs navigation state', navigationExtras);
    this.router.navigate(['tabs/' + tabRoute], navigationExtras);
  }

  ngOnInit(): void {
    console.log('the stat of initial Convo', this.initialConvo);
  }


}
