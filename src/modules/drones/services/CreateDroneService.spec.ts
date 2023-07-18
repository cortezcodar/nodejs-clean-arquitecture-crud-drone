import CreateDroneService from '@modules/drones/services/CreateDroneService';

import FakeDronesRepository from '@modules/drones/repositories/fakes/FakeDronesRepository';

import AppError from '@shared/errors/AppError';

let createDroneService: CreateDroneService;

let fakeDronesRepository: FakeDronesRepository;

describe('CreateDrone', () => {
  beforeEach(() => {
    fakeDronesRepository = new FakeDronesRepository;

    createDroneService = new CreateDroneService(
      fakeDronesRepository
    );
  });

  it('should be able create a new drone', async () => {
    const drone = await createDroneService.execute({
      customer_image: "https://robohash.org/uia.jpg",
      customer_name: "Suzann",
      customer_address: "955 Springview Junction",
      battery: 90,
      max_speed: 3.8,
      average_speed: 11.6,
      status: "failed",
      current_fly: 94
    });

    expect(drone).toHaveProperty('id');
  });

  it('should not create a drone with E-mail already taken', async () => {
    await createDroneService.execute({
      customer_image: "https://robohash.org/uia.jpg",
      customer_name: "Suzann",
      customer_address: "955 Springview Junction",
      battery: 90,
      max_speed: 3.8,
      average_speed: 11.6,
      status: "failed",
      current_fly: 94
    });

    await expect(
      createDroneService.execute({
        customer_image: "https://robohash.org/uia.jpg",
        customer_name: "Suzann",
        customer_address: "955 Springview Junction",
        battery: 90,
        max_speed: 3.8,
        average_speed: 11.6,
        status: "failed",
        current_fly: 94
      })
    ).rejects.toBeInstanceOf(AppError);
    // Usamos o "rejects" quando o teste for cair em um Error.
  });
})