import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home.component/home.component';
import { EscuelaListadoComponent } from '../../escuelas/components/listado/escuela-listado.component/escuela-listado.component';
import { EscuelaCrearComponent } from '../../escuelas/components/crear/escuela-crear.component/escuela-crear.component';

export const HOME_ROUTES: Routes = [

    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path:'escuelas',
                loadComponent: () => import('../../escuelas/components/listado/escuela-listado.component/escuela-listado.component').then(c=>c.EscuelaListadoComponent)
                //component: EscuelaListadoComponent
            },
            {
                path:'escuela/registro',
                loadComponent: () => import('../../escuelas/components/crear/escuela-crear.component/escuela-crear.component').then(c=>c.EscuelaCrearComponent)
            }
        ]
    }
]