import FakeDronesRepository from '@modules/drones/repositories/fakes/FakeDronesRepository';

import ListAllDronesService from '@modules/drones/services/ListAllDronesService';

let listAllDronesService: ListAllDronesService;

let dronesRepository: FakeDronesRepository;

describe('List All Drones', () => {

  beforeEach(() => {
    const dronesRepository = new FakeDronesRepository;

    listAllDronesService = new ListAllDronesService(
      dronesRepository,
    );
  });

  it('should be able list all drones', async () => {
    // com o iterable vamos criar um item por vez.
    /**
     * O iterable vai me retorna 5 posições do Array(length: 5)
     * (_, index) => index: retorna quantas posições foi criado no Array.
     * nesse caso foi criado cinco posições ou seja, será criado 5 usuarios.
     */
    const iterable = Array.from({ length: 5 }, (_, index) => index);

    // criando usuarios baseado no quanto de posições do Array, que a variavel "iterable" retorna.
    const drones = await Promise.all(
      // estamos criando o usuario direto no repositorio,
      // porque todos os usuarios vai esta com os mesmos campos,
      // se nos criar direto no service, vai cair em um erro,
      // pois la no service tem validações para não criar usuarios iguais.
      // também para ser rapido o teste.
      iterable.map(async item =>
        dronesRepository.create({
          customer_image: "https://robohash.org/uia.jpg",
          customer_name: "Suzann",
          customer_address: "955 Springview Junction",
          battery: 90,
          max_speed: 3.8,
          average_speed: 11.6,
          status: "failed",
          current_fly: 94
        })
      )
    );

    const allDrones = await listAllDronesService.execute();

    expect(allDrones).toEqual([...drones]);
  });

  it('should be able to list all drones in redis cache', async () => {
    const iterable = Array.from({ length: 5 }, (_, index) => index);

    const drones = await Promise.all(
      iterable.map(async item =>
        dronesRepository.create({
          customer_image: "https://robohash.org/uia.jpg",
          customer_name: "Suzann",
          customer_address: "955 Springview Junction",
          battery: 90,
          max_speed: 3.8,
          average_speed: 11.6,
          status: "failed",
          current_fly: 94
        })
      )
    );


    await expect(drones).toEqual([...drones]);
  });
})