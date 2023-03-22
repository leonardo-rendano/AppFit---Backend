import { Request, Response } from "express";
import { RemoveTeacherService } from "../../services/teachers/RemoveTeacherService";

export class RemoveTeacherController {
  async handle(req: Request, res: Response) {

    const teacher_id = req.query.teacher_id as string

    const removeTeacherService = new RemoveTeacherService()

    const teacher = await removeTeacherService.execute({
      teacher_id
    })

    return res.json(teacher)

  }
}