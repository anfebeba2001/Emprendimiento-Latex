import { Component, Input } from '@angular/core';
import { place } from '../../../../Models/place';

@Component({
  selector: 'app-place-slide',
  imports: [],
  templateUrl: './place-slide.component.html',
  styleUrl: './place-slide.component.css'
})
export class PlaceSlideComponent {
  @Input() place: place = {
    
    name: 'empty',
      description: 'empty',
      image: 'empty',
      location:'empty',
      price: 'empty',
      votesUp: 0,
      votesDown: 0,
      rating: 0
  };
  
}
