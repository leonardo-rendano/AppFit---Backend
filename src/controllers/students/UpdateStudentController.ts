import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/students/UpdateStudentService";

export class UpdateStudentController {
  async handle(req: Request, res: Response) {

    const { id, name, objective, rg, cpf, address, contact, email } = req.body 

    const updateStudentService = new UpdateStudentService()

    const student = await updateStudentService.execute({
      id,
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