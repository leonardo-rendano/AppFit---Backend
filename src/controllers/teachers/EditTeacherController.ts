import { Request, Response } from "express";
import { EditTeacherService } from "../../services/teachers/EditTeacherService";

export class EditTeacherController {
  async handle(req: Request, res: Response) {

    const { id, name, register, cpf, turn } = req.body

    const editTeacherService = new EditTeacherService()

    const teacher = await editTeacherService.execute({
      id,
      name,
      register,
      cpf,
      turn
    })

    return res.json(teacher)
  }
}