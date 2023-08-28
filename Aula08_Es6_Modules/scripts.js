import { helloWorld } from './module.js';
import MeuModulo from './module2.js';
import * as MeuModuloNovo from './module3.js';

helloWorld();
MeuModulo();
console.log(MeuModuloNovo.name);
console.log(MeuModuloNovo.age);
console.log(MeuModuloNovo.country);
