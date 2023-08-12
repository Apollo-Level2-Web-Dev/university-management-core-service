import express from 'express';
import { BuildingController } from './building.controller';

const router = express.Router();

router.get('/', BuildingController.getAllFromDB)

router.post('/', BuildingController.insertIntoDB)

export const buildingRoutes = router;