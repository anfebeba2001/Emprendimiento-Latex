import { Component, Input } from '@angular/core';
import { newElement } from '../../../../Models/newElement';

@Component({
  selector: 'app-news-slide',
  imports: [],
  templateUrl: './news-slide.component.html',
  styleUrl: './news-slide.component.css'
})
export class NewsSlideComponent {
@Input() newElement: newElement = {
  provider: '',
  title: '',
  description: '',
  date: '',
  distance: 0
}  
};

