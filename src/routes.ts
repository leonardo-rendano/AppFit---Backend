import { Router } from 'express'
import { CreateStudentController } from './controllers/students/CreateStudentController'

export const router = Router()

const createStudentController = new CreateStudentController()

// ------- STUDENTS - ROUTES -------- //
router.post("/student", createStudentController.handle)
