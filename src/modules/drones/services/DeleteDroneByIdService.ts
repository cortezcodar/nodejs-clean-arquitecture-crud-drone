import { injectable, inject } from 'tsyringe';

import IDronesRepository from '@modules/drones/repositories/ICreateDronesRepository';

import { DeleteResult } from 'typeorm';

@injectable()
class DeleteDroneByIdService {

    private dronesRepository: IDronesRepository;


    constructor(@inject('DronesRepository') dronesRepository: IDronesRepository,) { this.dronesRepository = dronesRepository }

    public async execute(id: string): Promise<DeleteResult> {

        const drone = await this.dronesRepository.deleteById(id)
        return drone;
    }
}

export default DeleteDroneByIdService;
