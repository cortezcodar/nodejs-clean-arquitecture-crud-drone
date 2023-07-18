import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';
import ICreateDroneDTO from '@modules/drones/dtos/ICreateDroneDTO';
import {DeleteResult, UpdateResult } from 'typeorm';

export default interface ICreateDronesRepository {
 
 
 
  findAll(): Promise<Drone[] | undefined>;
  findById(id: string): Promise<Drone | undefined>;
  create(data: ICreateDroneDTO): Promise<Drone>;
  updateById(id: string,data: ICreateDroneDTO): Promise<UpdateResult>;
  deleteById(id: string): Promise<DeleteResult>;
 
}