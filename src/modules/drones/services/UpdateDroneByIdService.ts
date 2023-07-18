import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import IDroneRepository from '@modules/drones/repositories/ICreateDronesRepository';


import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';
import ICreateDroneDTO from '@modules/drones/dtos/ICreateDroneDTO'

import AppError from '@shared/errors/AppError';
import { UpdateResult } from 'typeorm';

interface IRequest {
    id: string,
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
class UpdateDroneService {

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
        id,
        customer_image,
        customer_name,
        customer_address,
        battery,
        max_speed,
        average_speed,
        status,
        current_fly }: IRequest): Promise<UpdateResult> {



        let data: ICreateDroneDTO = {
            customer_image,
            customer_name,
            customer_address,
            battery,
            max_speed,
            average_speed,
            status,
            current_fly
        }

        const drone = await this.dronesRepository.updateById(id, data);

        return drone;
    }

}

export default UpdateDroneService;