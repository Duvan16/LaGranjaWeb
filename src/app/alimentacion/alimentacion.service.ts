import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlimentacionService {
  private apiURL = environment.apiURL + 'generos';

  constructor() {}
}
