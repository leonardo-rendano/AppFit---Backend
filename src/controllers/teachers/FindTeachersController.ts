import { Request, Response } from "express";
import { FindTeachersService } from "../../services/teachers/FindTeachersService";

export class FindTeachersController {
  async handle(req: Request, res: Response) {

    const findTeachersService = new FindTeachersService()

    const teachers = await findTeachersService.execute()

    return res.json(teachers)
  }
}