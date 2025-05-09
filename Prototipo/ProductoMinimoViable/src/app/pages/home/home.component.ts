import { Component} from '@angular/core';
import { SloganPanelComponent } from '../../../../components/Landing/slogan-panel/slogan-panel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [SloganPanelComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {}