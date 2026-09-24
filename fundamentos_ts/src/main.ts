import { actividades } from './datos.js';
import { GestorActividades } from './gestor.js';
import { crearResumen, presentarResumen } from './resumen.js';
import { leerActividadesJson } from './validacion.js';

const texto = JSON.stringify(actividades);
const actividadesLeidas = leerActividadesJson(texto);
const gestor = new GestorActividades(actividadesLeidas);

console.log(presentarResumen(crearResumen(gestor.completar(3))));