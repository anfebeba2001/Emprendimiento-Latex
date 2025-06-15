import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { SearchBarComponent } from "./components/shared/search-bar/search-bar.component";


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NavBarComponent, SearchBarComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductoMinimoViable';
}
