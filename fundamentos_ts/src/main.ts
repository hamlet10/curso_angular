import { actividades } from './datos.js';
import { GestorActividades } from './gestor.js';
import { crearResumen, presentarResumen } from './resumen.js';

const gestor = new GestorActividades(actividades);
const actualizadas = gestor.completar(3);

console.log(presentarResumen(crearResumen(actualizadas)));
