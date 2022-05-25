import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { razaCreacionDTO, razaDTO } from './razas';

@Injectable({
  providedIn: 'root',
})
export class RazasService {
  private apiURL = environment.apiURL + 'razas';

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
    return this.http.get<razaDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }

  public crear(raza: razaCreacionDTO) {
    return this.http.post(this.apiURL, raza);
  }

  public obtenerPorId(id: number): Observable<razaDTO> {
    return this.http.get<razaDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerTodos() {
    return this.http.get<razaDTO[]>(`${this.apiURL}/todos`);
  }

  public editar(id: number, raza: razaCreacionDTO) {
    return this.http.put(`${this.apiURL}/${id}`, raza);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
