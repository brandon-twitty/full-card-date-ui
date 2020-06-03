import {Component, OnInit} from '@angular/core';
import {APIService} from '../API.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  imageUrl: string;

  constructor(private api: APIService) {}

  ngOnInit() {
    // getUserImageUrlById()
  }
  getUserImageUrlById(){

  }
}
