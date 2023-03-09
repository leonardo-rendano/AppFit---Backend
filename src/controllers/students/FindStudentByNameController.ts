import { Request, Response } from "express";
import { FindStudentByNameService } from "../../services/students/FindStudentByNameService";

export class FindStudentByNameController {
  async handle(req: Request, res: Response) {

    const name  = req.query.name as string
   
    const findStudentByNameService = new FindStudentByNameService()

    const student = await findStudentByNameService.execute({
      name
    })

    return res.json(student)

  }
}