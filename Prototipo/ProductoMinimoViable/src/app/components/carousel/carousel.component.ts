import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { NewsService } from '../../services/news.service';
import { PlaceSlideComponent } from './slides/place-slide/place-slide.component';
import { ReviewsService } from '../../services/reviews.service';
import { NewsSlideComponent } from './slides/news-slide/news-slide.component';
import { ReviewSlideComponent } from './slides/review-slide/review-slide.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule,PlaceSlideComponent,NewsSlideComponent, ReviewSlideComponent],
})
export class CarouselComponent {
  selectedType: string = '';
  elements: any[] = [];
  currentIndex = 0;
  slidesNumber = 0;
  @Input() sizeOfTranslation: number = 1; 

  constructor(private placeService: PlacesService,
              private newsService: NewsService,
              private reviewsService: ReviewsService) {}  
  
  @Input()
  set type(value: string) {
    this.selectedType = value;
    if (value === 'places') {
      this.elements = this.placeService.getPlaces();
      this.slidesNumber = this.elements.length;
    } else if (value === 'news') {
      this.elements = this.newsService.getNews();
      this.slidesNumber = Math.floor(this.elements.length / 2);
      this.sizeOfTranslation = 165/this.elements.length;
    } else if (value === 'reviews') {
      this.elements = this.reviewsService.getReviews();
      this.slidesNumber = Math.floor(this.elements.length / 2);
      this.sizeOfTranslation = 165/this.elements.length;
    }
  }
  nextSlide() {

    this.currentIndex = (this.currentIndex + 1) % this.elements.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.elements.length) % this.elements.length;
  }

  getTransform() {
    return `translateX(-${this.currentIndex * this.sizeOfTranslation}vw)`;
  }
}
