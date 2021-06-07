import { Pet } from './pet';

export interface Owner {
    id: number | any;
    nombre: string;
    apellidos: string;
    direccion:string;
    ciudad:string;
    pets: Pet[];
}
