import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

import {
  Carousel,
  initTE,
} from "tw-elements";

initTE({ Carousel });