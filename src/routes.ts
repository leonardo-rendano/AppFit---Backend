import { Router } from 'express'
import { CreateStudentController } from './controllers/students/CreateStudentController'
import { CreateTeacherController } from './controllers/teachers/CreateTeacherController'
import { CreateSetsController } from './controllers/sets/CreateSetsController'
import { CreateExerciseController } from './controllers/exercises/CreateExerciseController'

export const router = Router()

const createStudentController = new CreateStudentController();
const createTeacherController = new CreateTeacherController();
const createSetsController = new CreateSetsController();
const createExerciseController = new CreateExerciseController();

// ------- STUDENTS - ROUTES -------- //
router.post("/student", createStudentController.handle)

// ------- TEACHERS - ROUTES -------- //
router.post("/teacher", createTeacherController.handle)

// ------- SETS - ROUTES ------------ //
router.post("/sets", createSetsController.handle)

// ------- EXERCISES - ROUTES ------- //
router.post("/exercise", createExerciseController.handle)