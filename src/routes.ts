import { Router } from 'express'
import { CreateStudentController } from './controllers/students/CreateStudentController'
import { CreateTeacherController } from './controllers/students/CreateTeacherController'

export const router = Router()

const createStudentController = new CreateStudentController();
const createTeacherController = new CreateTeacherController()

// ------- STUDENTS - ROUTES -------- //
router.post("/student", createStudentController.handle)

// ------- TEACHERS - ROUTES -------- //
router.post("/teacher", createTeacherController.handle)
