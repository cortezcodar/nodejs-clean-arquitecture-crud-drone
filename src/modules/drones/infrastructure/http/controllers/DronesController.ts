import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateDroneService from '@modules/drones/services/CreateDroneService';
import ListAllDronesService from '@modules/drones/services/ListAllDronesService';
import ListDroneByIdService from '@modules/drones/services/ListDroneByIdService';
import UpdateDroneByIdService from '@modules/drones/services/UpdateDroneByIdService';
import DeleteDroneByIdService from '@modules/drones/services/DeleteDroneByIdService';

class DronesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      customer_image,
      customer_name,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    } = request.body;

    // agora vamos ter acesso aos metodos no createDrone.
    const createDrone = container.resolve(CreateDroneService);

    const drone = await createDrone.execute({
      customer_image,
      customer_name,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    });

    // Este método transforma o objeto de classe em uma nova instância do objeto de classe.
    /**
     * O classToClass vai ler o model de Drone, ele vai ver o decorator @Exclude(Que vai "excluir" o campo encrypted_password).
     * Então ele vai criar uma nova estancia do model Drone sem o encrypted_password.
     * E essa estancia vai ser retornada na resposta.
     */
    return response.status(200).json(classToClass(drone));
  }

  public async index(request: Request, response: Response): Promise<Response> {


    const listAllDrones = container.resolve(ListAllDronesService);

    const drones = await listAllDrones.execute();
    return response.status(200).json(drones)
  }

  public async indexById(request: Request, response: Response): Promise<Response> {

    let { id } = request.params
    const listDetailsDrone = container.resolve(ListDroneByIdService);

    const drone = await listDetailsDrone.execute(id);
    return response.status(200).json(drone)
  }

  public async updateById(request: Request, response: Response): Promise<Response> {

    let { id } = request.params

    const {
      customer_image,
      customer_name,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    } = request.body;
    const updateDroneById = container.resolve(UpdateDroneByIdService);

    const drone = await updateDroneById.execute({
      id, 
      customer_image,
      customer_name,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly
    });
    
    return response.status(200).json(drone)
  }


  public async deleteById(request: Request, response: Response): Promise<Response> {

    let { id } = request.params
    const deleteDroneById = container.resolve(DeleteDroneByIdService);

    const drone = await deleteDroneById.execute(id);
    return response.status(200).json(drone)
  }



}

export default new DronesController();