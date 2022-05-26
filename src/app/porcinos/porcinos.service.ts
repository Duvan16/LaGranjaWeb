import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { porcinoCreacionDTO, porcinoDTO } from './porcinos';

@Injectable({
  providedIn: 'root',
})
export class PorcinosService {
  private apiURL = environment.apiURL + 'porcinos';

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
    return this.http.get<porcinoDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }

  public crear(porcino: porcinoCreacionDTO) {
    return this.http.post(this.apiURL, porcino);
  }

  public obtenerPorId(id: number): Observable<porcinoDTO> {
    return this.http.get<porcinoDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerTodos() {
    return this.http.get<porcinoDTO[]>(`${this.apiURL}/todos`);
  }

  public editar(id: number, porcino: porcinoCreacionDTO) {
    return this.http.put(`${this.apiURL}/${id}`, porcino);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
