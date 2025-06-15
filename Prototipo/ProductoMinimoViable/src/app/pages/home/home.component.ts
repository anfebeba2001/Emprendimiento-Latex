import { Component } from '@angular/core';
import { SloganPanelComponent } from '../../components/Landing/slogan-panel/slogan-panel.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { NewsComponent } from '../../components/Landing/news/news.component';
import { CommonSearchButtonsComponent } from "../../components/Landing/common-search-buttons/common-search-buttons.component";


NewsComponent
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SloganPanelComponent,
    NewsComponent,
    CarouselComponent,
    CommonSearchButtonsComponent,],
  styleUrl: './home.component.css'
})
export class HomeComponent { }