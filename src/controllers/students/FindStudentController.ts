import { Request, Response } from "express";
import { FindStudentService } from "../../services/students/FindStudentService";

export class FindStudentController {
  async handle(req: Request, res: Response) {

    const findStudentService = new FindStudentService()

    const student = await findStudentService.execute()

    return res.json(student)
  }
}