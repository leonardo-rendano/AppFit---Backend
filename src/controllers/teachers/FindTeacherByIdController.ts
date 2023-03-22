import { Request, Response } from "express";
import { FindTeacherByIdService } from "../../services/teachers/FindTeacherByIdService";

export class FindTeacherByIdController {
  async handle(req: Request, res: Response) {

    const teacher_id = req.query.teacher_id as string

    const findTeacherByIdService = new FindTeacherByIdService()

    const teacher = await findTeacherByIdService.execute({
      teacher_id
    })

    return res.json(teacher)

  }
}