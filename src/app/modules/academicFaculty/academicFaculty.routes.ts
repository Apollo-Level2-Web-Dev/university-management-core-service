import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyController } from './academicFaculty.contoller';
import { AcademicFacultyValidation } from './academicFaculty.validation';


const router = express.Router();

router.get('/', AcademicFacultyController.getAllFromDB);
router.get('/:id', AcademicFacultyController.getByIdFromDB);

router.post(
    '/',
    validateRequest(AcademicFacultyValidation.create),
    AcademicFacultyController.insertIntoDB
);

export const academicFacultyRoutes = router;