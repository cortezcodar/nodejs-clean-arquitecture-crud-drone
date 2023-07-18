import { injectable, inject } from 'tsyringe';

import IDronesRepository from '@modules/drones/repositories/ICreateDronesRepository';

import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';

@injectable()
class ListAllDronesService {
  
  private dronesRepository: IDronesRepository;
 

  constructor(

    @inject('DronesRepository')
    dronesRepository: IDronesRepository,


  ) {
    this.dronesRepository = dronesRepository;
  }

  public async execute(): Promise<Drone[] | undefined> {
    
    const drones = await this.dronesRepository.findAll()

   

    return drones;
  }
}

export default ListAllDronesService;
