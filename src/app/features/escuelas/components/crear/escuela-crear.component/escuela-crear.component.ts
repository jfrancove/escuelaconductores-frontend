import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentosModel } from '../../../../../consultas/models/departamentos.model';
import { DistritoModel } from '../../../../../consultas/models/distrito.model';
import { ProvinciaModel } from '../../../../../consultas/models/provincia.model';
import { UbigeoServices } from '../../../../../consultas/services/ubigeo.services';
import { EscuelaModel } from '../../../../../consultas/models/escuela.model';

@Component({
  selector: 'app-escuela-crear.component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './escuela-crear.component.html',
  styleUrl: './escuela-crear.component.css'
})
export class EscuelaCrearComponent {

  private ubigeoService = inject(UbigeoServices)
  private router = inject(Router);

  public listadep!: DepartamentosModel[];
  public listapro!: ProvinciaModel[];
  public listadis!: DistritoModel[];
  
  private formBuilder = inject(FormBuilder);

  public escuelaForm = this.formBuilder.group({    
    departamento:['00'],
    provincia:['0000'],
    distrito:['000000'],
    ruc:[''],
    establecimiento:[''],
    direccion:['']
  });

  ngOnInit(): void{
    this.listarDepartamentos();
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
      this.escuelaForm.get('provincia')?.setValue('0000');
      this.escuelaForm.get('distrito')?.setValue('000000');
    //   return;
    }
    this.listarProvincias(codigo); 
    this.listarDistritos("0000");
  }

  onProvinciaChange(event: any){
    const codigo = event.target.value;
    if (codigo==="0000"){
      this.escuelaForm.get('provincia')?.setValue('0000');
      this.escuelaForm.get('distrito')?.setValue('000000');   
    //   return;
    }
    this.listarDistritos(codigo);
  }

  agregar(){
    const dept = this.escuelaForm.controls['departamento'].value || '';
    const prov = this.escuelaForm.controls['provincia'].value || '';
    const dist = this.escuelaForm.controls['distrito'].value || '';
    const ruc = this.escuelaForm.controls['ruc'].value || '';
    const establecimiento = this.escuelaForm.controls['establecimiento'].value || '';
    const direccion = this.escuelaForm.controls['direccion'].value || '';

    // const escuela: EscuelaModel = {
    //   apellidoPaterno: this.fe['apellidoPaterno'].value,
    //   apellidoMaterno: this.fe['apellidoMaterno'].value,
    //   nombres: this.fe['nombres'].value,
    //   correo: this.fe['correo'].value,
    //   telefono: this.fe['telefono'].value,
    //   //empresa: {id:2},
    //   empresa: {id:this.fe['empresa'].value},
    //   estado: this.fe['estado'].value ? '1' : '0',
    // };

  }

  cancelar(){
    this.router.navigate(['home/escuelas']);
  }

  get fe(): { [key: string]: AbstractControl } {
    return this.escuelaForm.controls;
  }

}
