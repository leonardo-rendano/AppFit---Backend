import { Router } from 'express'
import { CreateStudentController } from './controllers/students/CreateStudentController'
import { CreateTeacherController } from './controllers/teachers/CreateTeacherController'
import { CreateSetsController } from './controllers/sets/CreateSetsController'

export const router = Router()

const createStudentController = new CreateStudentController();
const createTeacherController = new CreateTeacherController();
const createSetsController = new CreateSetsController()

// ------- STUDENTS - ROUTES -------- //
router.post("/student", createStudentController.handle)

// ------- TEACHERS - ROUTES -------- //
router.post("/teacher", createTeacherController.handle)

// ------- SETS - ROUTES ------------ //
router.post("/sets", createSetsController.handle)
