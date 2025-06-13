import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultItemComponent } from '../../components/shared/search-result-item/search-result-item.component';
import { SearchBarComponent } from "../../components/shared/search-bar/search-bar.component";
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-results-page',
  imports: [CommonModule, SearchResultItemComponent, SearchBarComponent],
  templateUrl: './search-results-page.component.html',
  styleUrl: './search-results-page.component.css'
})
export class SearchResultsPageComponent {
  items: any[] = [];
  constructor(private placeService: PlacesService) {
    this.items = placeService.getPlaces();
  }
}
