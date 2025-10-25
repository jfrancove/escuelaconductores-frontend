import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentosModel } from '../../models/departamentos.model';
import { ProvinciaModel } from '../../models/provincia.model';
import { DistritoModel } from '../../models/distrito.model';
import { EscuelaModel } from '../../models/escuela.model';
import { UbigeoServices } from '../../services/ubigeo.services';
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

  private ubigeoService = inject(UbigeoServices)
  private router = inject(Router);

  public listadep!: DepartamentosModel[];
  public listapro!: ProvinciaModel[];
  public listadis!: DistritoModel[];

  public listaescuela!: EscuelaModel[];

  private formBuilder = inject(FormBuilder);

  public totalItems:number=0;
  public page: number=1;
  public itemsPerPage: number=5;

  public ubigeoForm = this.formBuilder.group({    
    departamento:['00'],
    provincia:['0000'],
    distrito:['000000'],
    descripcion:['']
  });

  ngOnInit(): void{
    this.listarDepartamentos();
  }

  pageChanged(event: number): void {
    this.page = event;    
  }

  listarDepartamentos(){
    this.ubigeoService.listarDepartamentos().subscribe({
      next:(res) => {
        this.listadep = res;
      },
    });
  }

  listarProvincias(codigo: string){
    this.ubigeoService.listarProvincias(codigo).subscribe({
      next:(res) => {
        this.listapro = res;
      },
    });
  }

  listarDistritos(codigo: string){
    this.ubigeoService.listarDistritos(codigo).subscribe({
      next:(res) => {
        this.listadis = res;
      },
    });
  }

  onDepartamentoChange(event: any){
    const codigo = event.target.value;
    if (codigo==="00"){
      this.ubigeoForm.get('provincia')?.setValue('0000');
      this.ubigeoForm.get('distrito')?.setValue('000000');
    //   return;
    }
    this.listarProvincias(codigo); 
    this.listarDistritos("0000");
  }

  onProvinciaChange(event: any){
    const codigo = event.target.value;
    if (codigo==="0000"){
      this.ubigeoForm.get('provincia')?.setValue('0000');
      this.ubigeoForm.get('distrito')?.setValue('000000');   
    //   return;
    }
    this.listarDistritos(codigo);
  }

  buscar(){
    const dept = this.ubigeoForm.controls['departamento'].value || '';
    const prov = this.ubigeoForm.controls['provincia'].value || '';
    const dist = this.ubigeoForm.controls['distrito'].value || '';

    const desc = this.ubigeoForm.controls['descripcion'].value || '';

    console.log("ubigeo: " + dept+prov+dist);

    this.listaescuela = [];
    
    if(desc == ''){
      this.ubigeoService.listarEscuelas(dept,prov,dist).subscribe({
        next:(res) => {
          this.listaescuela = res;
          //this.totalItems=this.listaescuela.length
        },
      });
    }else{
      this.ubigeoService.listarEscuelasByDesc(desc).subscribe({
        next:(res) => {
          this.listaescuela = res;
          //this.totalItems=this.listaescuela.length
        },
      });
    }
    
  }

  limpiar(){
    this.ubigeoForm.get('departamento')?.setValue('00');
    this.ubigeoForm.get('provincia')?.setValue('0000');
    this.ubigeoForm.get('distrito')?.setValue('000000');
    this.ubigeoForm.get('descripcion')?.setValue('');
    this.listaescuela.length = 0;    
  }

}
