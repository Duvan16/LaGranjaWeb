import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { clienteCreacionDTO, clienteDTO } from './clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiURL = environment.apiURL + 'clientes';

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
    return this.http.get<clienteDTO[]>(this.apiURL, {
      observe: 'response',
      params,
    });
  }

  public crear(cliente: clienteCreacionDTO) {
    return this.http.post(this.apiURL, cliente);
  }

  public obtenerPorId(id: number): Observable<clienteDTO> {
    return this.http.get<clienteDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerTodos() {
    return this.http.get<clienteDTO[]>(`${this.apiURL}/todos`);
  }

  public editar(id: number, cliente: clienteCreacionDTO) {
    return this.http.put(`${this.apiURL}/${id}`, cliente);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
