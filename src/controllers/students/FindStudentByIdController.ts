import { Request, Response } from "express";
import { FindStudentByIdService } from "../../services/students/FindStudentByIdService";

export class FindStudentByIdController {
  async handle(req: Request, res: Response) {

    const id = req.query.id as string

    const findStudentByIdService = new FindStudentByIdService()

    const student = await findStudentByIdService.execute({
       id
    })

    res.json(student)
  }
}