import { injectable, inject } from 'tsyringe';

import IDronesRepository from '@modules/drones/repositories/ICreateDronesRepository';

import Drone from '@modules/drones/infrastructure/typeorm/entities/Drone';

@injectable()
class ListDroneByIdService {

    private dronesRepository: IDronesRepository;


    constructor(@inject('DronesRepository') dronesRepository: IDronesRepository,) { this.dronesRepository = dronesRepository }

    public async execute(id: string): Promise<Drone | undefined> {

        const drone = await this.dronesRepository.findById(id)
        return drone;
    }
}

export default ListDroneByIdService;
