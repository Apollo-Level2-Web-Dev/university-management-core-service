import express from 'express';
import { StudentEnrolledCourseMarkConroller } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.patch('/update-marks', StudentEnrolledCourseMarkConroller.updateStudentMarks)

export const studentEnrolledCourseMarkRoutes = router;