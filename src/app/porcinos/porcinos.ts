import { alimentacionDTO } from '../alimentacion/alimentacion';
import { clienteDTO } from '../clientes/clientes';
import { razaDTO } from '../razas/razas';

export interface porcinoCreacionDTO {
  razaId: number;
  clienteId: number;
  alimentacionId: number;
  fechaNacimiento: Date;
  peso: number;
}

export interface porcinoDTO {
  id: number;
  razaId: number;
  raza: razaDTO;
  clienteId: number;
  cliente: clienteDTO;
  alimentacionId: number;
  alimentacion: alimentacionDTO;
  fechaNacimiento: Date;
  peso: number;
}
