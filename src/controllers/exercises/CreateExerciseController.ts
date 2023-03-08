import { Request, Response } from "express";
import { CreateExerciseService } from "../../services/exercises/CreateExerciseService";

export class CreateExerciseController {
  async handle(req: Request, res: Response) {

    const { name, reps } = req.body;

    const createExerciseService = new CreateExerciseService()

    const exercise = await createExerciseService.execute({
      name, reps
    })

    return res.json(exercise)
  }
}
