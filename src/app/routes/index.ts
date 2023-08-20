import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { studentRoutes } from '../modules/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/academic-semesters",
    route: AcademicSemeterRoutes
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes
  },
  {
    path: '/faculties',
    route: facultyRoutes
  },
  {
    path: '/students',
    route: studentRoutes
  },
  {
    path: '/buildings',
    route: buildingRoutes
  },
  {
    path: '/rooms',
    route: roomRoutes
  },
  {
    path: '/courses',
    route: courseRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
