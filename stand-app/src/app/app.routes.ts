import { Routes } from '@angular/router';
import { AbcComponent } from './abc.component';
import { PqrComponent } from './pqr.component';

export const routes: Routes = [
    // { path :'abc', component: AbcComponent },
    // { path :'pqr', component: PqrComponent },

    { path:'abc', loadComponent: () => import('./abc.component').then(m => m.AbcComponent) },
    { path:'pqr', loadComponent: () => import('./pqr.component').then(m => m.PqrComponent) }
];
