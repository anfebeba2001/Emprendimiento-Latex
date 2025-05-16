import { Component} from '@angular/core';
import { SloganPanelComponent } from '../../../../components/Landing/slogan-panel/slogan-panel.component';
import { CarouselComponent } from '../../../../components/carousel/carousel.component';
import { NewsComponent } from '../../news/news.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SloganPanelComponent,NewsComponent,CarouselComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {}