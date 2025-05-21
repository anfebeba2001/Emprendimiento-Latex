import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
    query: string = '';

  @Output() search = new EventEmitter<string>();
  onSearch() {
    this.search.emit(this.query);
  }
}
