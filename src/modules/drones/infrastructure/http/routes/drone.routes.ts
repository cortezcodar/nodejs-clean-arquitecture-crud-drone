import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import DroneController from '@modules/drones/infrastructure/http/controllers/DronesController';
const dronesRouter = Router();


dronesRouter.get('/drones', DroneController.index);
dronesRouter.get('/drones/:id', DroneController.indexById);

dronesRouter.post('/drones', celebrate({
  [Segments.BODY]: {
    customer_image: Joi.string().required(),
    customer_name: Joi.string().required(),
    customer_address: Joi.string().required(),
    battery: Joi.number().required(),
    max_speed: Joi.number().required(),
    average_speed: Joi.number().required(),
    status: Joi.string().required(),
    current_fly: Joi.number().required()
  }
},{ abortEarly: false }), DroneController.create);

dronesRouter.put('/drones/:id', DroneController.updateById);
dronesRouter.delete('/drones/:id', DroneController.deleteById);

export default dronesRouter;