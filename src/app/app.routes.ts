import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';

export const routes: Routes = [
    { 
        path: 'route1', 
        component: Page1Component
    },
    {
        path: 'route2',
        loadComponent: () => import('./pages/page2/page2.component').then(c => c.Page2Component)
    }
];
