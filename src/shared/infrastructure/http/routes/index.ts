import { Router } from 'express';

import rateLimiter from '@shared/infrastructure/http/middlewares/rateLimiter';

import dronesRouter from '@modules/drones/infrastructure/http/routes/drone.routes';


const routes = Router();

routes.use(rateLimiter);
routes.get('/drones', dronesRouter);
routes.get('/drones/:id', dronesRouter);
routes.post('/drones', dronesRouter);
routes.put('/drones/:id', dronesRouter);
routes.delete('/drones/:id', dronesRouter);



export default routes;

