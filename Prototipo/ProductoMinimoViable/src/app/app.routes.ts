import { Routes } from '@angular/router';
import  {HomeComponent} from './pages/home/home.component';
import { PlacePageComponent } from './pages/place-page/place-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'place',
        component:PlacePageComponent
    },
    {
        path: 'search-results',
        component:SearchResultsPageComponent
    }

];