import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsServise: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsServise.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
