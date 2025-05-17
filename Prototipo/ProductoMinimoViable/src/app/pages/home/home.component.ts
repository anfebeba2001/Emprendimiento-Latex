import { Component} from '@angular/core';
import { SloganPanelComponent } from '../../components/Landing/slogan-panel/slogan-panel.component';
import { NewsComponent } from '../../components/news/news.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

NewsComponent
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SloganPanelComponent,NewsComponent,CarouselComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {}