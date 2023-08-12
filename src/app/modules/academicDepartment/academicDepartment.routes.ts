import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validations';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllFromDB);
router.get('/:id', AcademicDepartmentController.getByIdFromDB);

router.post(
    '/',
    validateRequest(AcademicDepartmentValidation.create),
    AcademicDepartmentController.insertIntoDB
);

router.patch(
    '/:id',
    validateRequest(AcademicDepartmentValidation.update),
    AcademicDepartmentController.updateOneInDB
);

router.delete(
    '/:id',
    AcademicDepartmentController.deleteByIdFromDB
);

export const academicDepartmentRoutes = router;