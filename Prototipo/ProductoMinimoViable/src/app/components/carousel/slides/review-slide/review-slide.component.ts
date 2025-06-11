import { Component, Input } from '@angular/core';
import { review } from '../../../../Models/review';

@Component({
  selector: 'app-review-slide',
  imports: [],
  templateUrl: './review-slide.component.html',
  styleUrl: './review-slide.component.css'
})
export class ReviewSlideComponent {
 @Input() review : review = {
  userName: '',
  userImg: '',
  reviewText: '',
  reviewDate: new Date(),
  reviewRating: 0
 }
}
