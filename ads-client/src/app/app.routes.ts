import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdDetailsComponent } from './pages/ad-details/ad-details.component';
import { authGuard } from './services/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ads/:id', component: AdDetailsComponent }, // 👈 OVO
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], // 🔐 ZAŠTIĆENA RUTA
  },
  { path: '**', redirectTo: 'home' },
];
