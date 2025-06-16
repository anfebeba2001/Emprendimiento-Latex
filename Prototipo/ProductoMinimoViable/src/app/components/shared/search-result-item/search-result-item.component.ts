import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-result-item',
  imports: [],
  templateUrl: './search-result-item.component.html',
  styleUrl: './search-result-item.component.css'
})
export class SearchResultItemComponent {
 @Input() item: any = null;
}
