import { Routes } from '@angular/router';
import  {HomeComponent} from './pages/home/home.component';
import { PlacePageComponent } from './pages/place-page/place-page.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'place',
        component:PlacePageComponent
    },

];