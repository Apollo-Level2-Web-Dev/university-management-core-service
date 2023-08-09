import express from 'express';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/academic-semesters",
    route: AcademicSemeterRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
