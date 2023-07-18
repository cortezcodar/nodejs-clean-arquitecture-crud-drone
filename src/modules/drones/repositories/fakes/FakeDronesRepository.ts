import { uuid } from 'uuidv4';

import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';

import ICreateDronesRepository from '@modules/drones/repositories/ICreateDronesRepository';
import ICreateDroneDTO from '@modules/drones/dtos/ICreateDroneDTO';
import { UpdateResult, DeleteResult } from 'typeorm';

class FakeDronesRepository implements ICreateDronesRepository {
  
  updateById(id: string, data: ICreateDroneDTO): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<DeleteResult> {
    throw new Error('Method not implemented.');
  }
  private drones: Drone[] = [];

  public async create({
    customer_image,
    customer_name,
    customer_address,
    battery,
    max_speed,
    average_speed,
    status,
    current_fly
  }: ICreateDroneDTO): Promise<Drone> {
    const drone = new Drone();

    // colocando todas as propriedades, id, name, email, etc... para dentro do objeto drone;
    Object.assign(drone, {
      id: uuid(), customer_image,
      customer_name,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    });

    this.drones.push(drone);

    return drone;
  }

  public async save(drone: Drone): Promise<Drone> {
    const findIndex = this.drones.findIndex(drone => drone.id === drone.id);

    this.drones[findIndex] = drone;

    return drone;
  }

  public async findById(id: string): Promise<Drone | undefined> {
    const drone = this.drones.find(droneStored => droneStored.id);

    return drone;
  }


  public async findAll(): Promise<Drone[] | undefined> {
    const drones = this.drones;

    return drones;
  }
}

export default FakeDronesRepository;