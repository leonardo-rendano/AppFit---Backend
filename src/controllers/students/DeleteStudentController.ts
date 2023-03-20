import { Request, Response } from "express";
import { DeleteStudentService } from "../../services/students/DeleteStudentService";

export class DeleteStudentController {
  async handle(req: Request, res: Response) {

    const id = Number(req.query.id)

    const deleteStudentService = new DeleteStudentService()

    const student = await deleteStudentService.execute({
      id
    })

    return res.json(student)

  }
}