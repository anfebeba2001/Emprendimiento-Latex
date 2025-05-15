import { Component} from '@angular/core';
import { SloganPanelComponent } from '../../../../components/Landing/slogan-panel/slogan-panel.component';
import { CarouselComponent } from '../../../../components/carousel/carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SloganPanelComponent,CarouselComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {}