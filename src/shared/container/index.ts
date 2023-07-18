import { container } from 'tsyringe';
import IDroneRepository from '@modules/drones/repositories/ICreateDronesRepository';
import DronesRepository from '@modules/drones/infrastructure/typeorm/repositories/DronesRepository';

// Registrando Container
/**
 * O Singleton ele cria uma unica estancia para toda aplicação, independente do request.
  * Ele vai manter esse objeto no ciclo de vida inteiro da aplicação.
  * ele vai criar esse objeto uma vez, e ele vai ser reutilizado toda vez que eu injetar essa dependecia.
  * ele não cria um objeto novo, ele so vai criar outro objeto se aplicação parar de vez.
 */
container.registerSingleton<IDroneRepository>(
  // DronesRepository tem que ser o mesmo nome la do @modules/drones/services/CreateDroneService.ts
  'DronesRepository',
  DronesRepository
);
