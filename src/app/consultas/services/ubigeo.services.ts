import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartamentosModel } from '../models/departamentos.model';
import { ProvinciaModel } from '../models/provincia.model';
import { DistritoModel } from '../models/distrito.model';
import { environment } from '../../../environments/environment.development';
import { EscuelaModel } from '../models/escuela.model';

@Injectable({
  providedIn: 'root'
})
export class UbigeoServices {
  
  url = `${environment.API_BASE}/api/ubigeo`;
  url2 = `${environment.API_BASE}/api/conductores`;

  private httpClient = inject(HttpClient);

  listarDepartamentos(): Observable<DepartamentosModel[]> {
    const local_url = `${this.url}/listarDepartamentos`;
    return this.httpClient.get<DepartamentosModel[]>(local_url);
  }

  listarProvincias(codigo: string): Observable<ProvinciaModel[]> {
    const local_url = `${this.url}/listarProvincias/${codigo}`;
    return this.httpClient.get<ProvinciaModel[]>(local_url);
  }

  listarDistritos(codigo: string): Observable<DistritoModel[]> {
    const local_url = `${this.url}/listarDistritos/${codigo}`;
    return this.httpClient.get<DistritoModel[]>(local_url);
  }

  listarEscuelas(departamento: string, provincia: string, distrito: string): Observable<EscuelaModel[]> {
    const local_url = `${this.url2}/listar/${departamento}/${provincia}/${distrito}`;
    return this.httpClient.get<EscuelaModel[]>(local_url);
  }

   listarEscuelasByDesc(descripcion: string): Observable<EscuelaModel[]> {
    const local_url = `${this.url2}/listarByDesc/${descripcion}`;
    return this.httpClient.get<EscuelaModel[]>(local_url);
  }
  
}
