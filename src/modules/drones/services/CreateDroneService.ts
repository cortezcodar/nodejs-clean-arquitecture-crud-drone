import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IDroneRepository from '@modules/drones/repositories/ICreateDronesRepository';


import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';

import AppError from '@shared/errors/AppError';

interface IRequest {
  customer_image: string;
  customer_name: string;
  customer_address: string;
  battery: number;
  max_speed: number;
  average_speed: number;
  status: string;
  current_fly: number;
}

// permite que as dependencias dessa classe seja injetada em tempo de execução.
@injectable()
class CreateDroneService {

  private dronesRepository: IDroneRepository;


  constructor(

    @inject('DronesRepository')
    dronesRepository: IDroneRepository,

    // injetando a dependecia em tempo de execução pelo constructor.

  ) {
    this.dronesRepository = dronesRepository;

    /**
     * Aqui estou armazenando a identificação de uma dependecia e a logica por de trás
     * da sua instanciação.
     */
  }

  public async execute({
    customer_image,
    customer_name,
    customer_address,
    battery,
    max_speed,
    average_speed,
    status,
    current_fly }: IRequest): Promise<Drone> {


    const drone = await this.dronesRepository.create({
      customer_image,
      customer_name,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    });

    return drone;
  }

}

export default CreateDroneService;