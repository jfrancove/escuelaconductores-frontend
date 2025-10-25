import { Routes } from '@angular/router';
import { LoginComponent } from './login/components/login.component/login.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound.component/pagenotfound.component';
import { EscuelaListadoComponent } from './consultas/components/escuela-listado.component/escuela-listado.component';

export const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'consultas',
        component: EscuelaListadoComponent,
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./features/home/router/home.routes').then((m) => m.HOME_ROUTES),
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    { path: '**', component: PagenotfoundComponent },

];