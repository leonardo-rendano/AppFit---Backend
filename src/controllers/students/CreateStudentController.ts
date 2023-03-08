import { Request, Response } from "express";
import { CreateStudentService } from "../../services/students/CreateStudentService";

export class CreateStudentController {
  async handle(req: Request, res: Response) {

    const { name, objective, rg, cpf, address, contact, email } = req.body;

    const createStudentService = new CreateStudentService()

    const student = await createStudentService.execute({
      name,
      objective,
      rg,
      cpf,
      address,
      contact,
      email
    })

    return res.json(student)
  }
}