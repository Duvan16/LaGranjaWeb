import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { alimentacionCreacionDTO, alimentacionDTO } from './alimentacion';

@Injectable({
  providedIn: 'root',
})
export class AlimentacionService {
  private apiURL = environment.apiURL + 'alimentacion';

  constructor(private http: HttpClient) {}

  public obtenerPaginado(
    pagina: number,
    cantidadRegistrosAMostrar: number
  ): Observable<any> {
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append(
      'recordsPorPagina',
      cantidadRegistrosAMostrar.toString()
    );
    return this.http.get<alimentacionDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }

  public crear(alimentacion: alimentacionCreacionDTO) {
    return this.http.post(this.apiURL, alimentacion);
  }

  public obtenerPorId(id: number): Observable<alimentacionDTO> {
    return this.http.get<alimentacionDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerTodos() {
    return this.http.get<alimentacionDTO[]>(`${this.apiURL}/todos`);
  }

  public editar(id: number, alimentacion: alimentacionCreacionDTO) {
    return this.http.put(`${this.apiURL}/${id}`, alimentacion);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
