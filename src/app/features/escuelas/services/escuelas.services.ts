import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { EscuelasModel } from '../models/escuelas.model';

@Injectable({
  providedIn: 'root'
})
export class EscuelasServices {
  
  url2 = `${environment.API_BASE}/api/conductores`;

  private httpClient = inject(HttpClient);


  listarEscuelas(departamento: string, provincia: string, distrito: string): Observable<EscuelasModel[]> {
      const local_url = `${this.url2}/listar/${departamento}/${provincia}/${distrito}`;
      return this.httpClient.get<EscuelasModel[]>(local_url);
  }

  eliminar(id?: number): Observable<any> {

    // const username = 'jfranco';
    // const password = 'admin123';
    // const headers = new HttpHeaders({
    //   'Authorization': 'Basic ' + btoa(username + ':' + password)
    // });

    return this.httpClient.delete<any>(`${this.url2}/eliminar/${id}`);
  }
  
}
