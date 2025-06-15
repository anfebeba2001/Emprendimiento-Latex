import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlacePageComponent } from './pages/place-page/place-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { CompanySideViewComponent } from './pages/company-side-view/company-side-view.component';
import { RoutPlannerComponent } from './pages/rout-planner/rout-planner.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'place',
        component: PlacePageComponent
    },
    {
        path: 'search-results',
        component: SearchResultsPageComponent
    },
    {
        path: 'user-details',
        component: UserPageComponent
    },
    {
        path: 'profile-settings',
        component: ProfileSettingsComponent
    }, 
    {
        path: 'company-side-view',
        component: CompanySideViewComponent
    },
    {
        path: 'rout-planner',
        component: RoutPlannerComponent
    }

];