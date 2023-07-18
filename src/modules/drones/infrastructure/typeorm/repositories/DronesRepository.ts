import { getRepository, Repository, Not, DeleteResult, UpdateResult } from 'typeorm';

import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';
import ICreateDroneDTO from '@modules/drones/dtos/ICreateDroneDTO';
import ICreateDronesRepository from '@modules/drones/repositories/ICreateDronesRepository';

class DronesRepository implements ICreateDronesRepository {
  private ormRepository: Repository<Drone>;

  constructor() {
    this.ormRepository = getRepository(Drone);
  }


  public async findAll(): Promise<Drone[] | undefined> {
    const drones = await this.ormRepository.find();

    return drones;
  }

  public async findById(id: string): Promise<Drone | undefined> {
    const drone = await this.ormRepository.findOne(id);

    return drone;
  }

  public async create(droneData: ICreateDroneDTO): Promise<Drone> {
    const drone = this.ormRepository.create(droneData);

    await this.ormRepository.save(drone);

    return drone;
  }

  public async updateById(id: string, droneData: ICreateDroneDTO): Promise<UpdateResult> {
    const drone = await this.ormRepository.update(id,droneData);

    return drone;
  }

  public async deleteById(id: string): Promise<DeleteResult> {
    const drone = await this.ormRepository.delete(id);

    return drone
  }



}

export default DronesRepository;