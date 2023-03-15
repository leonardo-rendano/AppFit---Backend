import { Router } from 'express'
import { CreateStudentController } from './controllers/students/CreateStudentController'
import { CreateTeacherController } from './controllers/teachers/CreateTeacherController'
import { CreateSetsController } from './controllers/sets/CreateSetsController'
import { CreateExerciseController } from './controllers/exercises/CreateExerciseController'
import { FindStudentController } from './controllers/students/FindStudentController'
import { FindTeachersController } from './controllers/teachers/FindTeachersController'
import { FindStudentByNameController } from './controllers/students/FindStudentByNameController'
import { FindStudentByIdController } from './controllers/students/FindStudentByIdController'

export const router = Router()

const createStudentController = new CreateStudentController();
const createTeacherController = new CreateTeacherController();
const createSetsController = new CreateSetsController();
const createExerciseController = new CreateExerciseController();
const findStudentController = new FindStudentController();
const findTeachersController = new FindTeachersController();
const findStudentByNameController = new FindStudentByNameController();
const findStudentByIdController = new FindStudentByIdController()

// ------- STUDENTS - ROUTES -------- //
router.post("/student", createStudentController.handle)
router.get("/student", findStudentController.handle)
router.get("/student/:name", findStudentByNameController.handle)
router.get("/students/:id", findStudentByIdController.handle)

// ------- TEACHERS - ROUTES -------- //
router.post("/teacher", createTeacherController.handle)
router.get("/teacher", findTeachersController.handle)

// ------- SETS - ROUTES ------------ //
router.post("/sets", createSetsController.handle)

// ------- EXERCISES - ROUTES ------- //
router.post("/exercise", createExerciseController.handle)