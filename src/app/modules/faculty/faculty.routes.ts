import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validations';

const router = express.Router();

router.get('/', FacultyController.getAllFromDB);

router.get('/:id', FacultyController.getByIdFromDB);


router.post(
    '/',
    validateRequest(FacultyValidation.create),
    FacultyController.insertIntoDB
);

router.patch(
    '/:id',
    validateRequest(FacultyValidation.update),
    FacultyController.updateOneInDB
);

router.delete(
    '/:id',
    FacultyController.deleteByIdFromDB
);

export const facultyRoutes = router;