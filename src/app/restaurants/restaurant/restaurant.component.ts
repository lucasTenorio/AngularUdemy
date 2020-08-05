import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations :
  [
    trigger('restaurantAppeared', [
      state('ready', style({opacity : 1})),
      transition('void => ready', [
        style({opacity : 0, transform : 'translate(-30px, -10px)'}),
        animate('500ms 0ms ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState : string = 'ready'
  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}