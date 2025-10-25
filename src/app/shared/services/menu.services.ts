import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuServices {
  
  private menuClass = 'open_menu_movil';

  constructor() { }


  private menuSections: Menu[] = [
    { label: 'Panel', route: '/dashboard' },
    {
      label: 'Escuela',
      children: [
        { label: 'Listado', route: '/escuelas/listado' },
        //{ label: 'Facturación', route: '/ventas/facturacion' },
        //{ label: 'Clientes', route: '/ventas/clientes' },
        //{ label: 'Reportes de Ventas', route: '/ventas/reportes' }
      ]
    },
    {
      label: 'Ubigeo',
      children: [
        { label: 'Departamentos', route: '/ubigeo/departamentos' },
        { label: 'Provincias', route: '/ubigeo/provincias' },
        { label: 'Distritos', route: '/ubigeo/distritos' }        
      ]
    }    
  ];

  getMenuSections(): Menu[] {
    return this.menuSections;
  }

  toggleMenu(): void {
    document.body.classList.toggle(this.menuClass);
  }

}
