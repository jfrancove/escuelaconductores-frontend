import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EscuelasModel } from '../../../models/escuelas.model';
import { EscuelasServices } from '../../../services/escuelas.services';
import { NgxPaginationModule } from 'ngx-pagination';



@Component({
  selector: 'app-escuela-listado.component',
  imports: [
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  templateUrl: './escuela-listado.component.html',
  styleUrl: './escuela-listado.component.css'
})
export class EscuelaListadoComponent {

  private escuelaService = inject(EscuelasServices);

  private router = inject(Router);

  public totalItems:number=0;
  public readonly MAX_SIZE:number=5;
  public readonly ITEMS_SIZE:number=10;
  public itemsPage!: EscuelasModel[];
  public page: number=1;
  public itemsPerPage: number=5;

  public listaescuela!: EscuelasModel[];

  private formBuilder = inject(FormBuilder);

  public ubigeoForm = this.formBuilder.group({    
    
  });

  ngOnInit(): void{
    this.buscar();
  }

  pageChanged(event: number): void {
    this.page = event;
    // const start= (this.page-1)*(this.ITEMS_SIZE)
    // const end= (this.page)*(this.ITEMS_SIZE)
    // this.itemsPage=this.listaescuela.slice(start,end)
  }

  buscar(){ 
    const dept = '00';
    const prov = '0000';
    const dist = '000000';    
    this.escuelaService.listarEscuelas(dept,prov,dist).subscribe({
      next:(res) => {
        this.listaescuela = res;
        this.totalItems=this.listaescuela.length
        this.itemsPage=this.listaescuela.slice(0,this.ITEMS_SIZE)
      },
    });
  }

  editar(escuela: EscuelasModel) {
    this.router.navigate(['home/escuela/registro', escuela.id_escuela]);
  }

  eliminar(escuela: EscuelasModel) {
    this.escuelaService.eliminar(escuela.id_escuela).subscribe({
      next:(res) => {
        this.listaescuela = res;
      },
    });
  }

  agregar(){
    this.router.navigate(['home/escuela/registro']);
  }
 
}
