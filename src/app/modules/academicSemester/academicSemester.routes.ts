import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemeterController } from './academicSemster.controller';
import { AcademicSemesterValidation } from './academicSemster.validation';
const router = express.Router();

router.get('/', AcademicSemeterController.getAllFromDB)
router.get('/:id', AcademicSemeterController.getDataById)
router.post(
    '/',
    validateRequest(AcademicSemesterValidation.create),
    AcademicSemeterController.insertIntoDB
)

router.patch('/:id', AcademicSemeterController.updateOneInDB);

router.delete('/:id', AcademicSemeterController.deleteByIdFromDB);

export const AcademicSemeterRoutes = router;