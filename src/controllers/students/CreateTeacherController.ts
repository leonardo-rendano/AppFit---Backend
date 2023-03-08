import { Request, Response } from "express";
import { CreateTeacherService } from "../../services/teachers/CreateTeacherService";

export class CreateTeacherController {
  async handle(req: Request, res: Response) {

    const { name, register, cpf, turn } = req.body;

    const createTeacherService = new CreateTeacherService()

    const teacher = await createTeacherService.execute({
      name,
      register,
      cpf,
      turn
    })

    return res.json(teacher)
  }
}