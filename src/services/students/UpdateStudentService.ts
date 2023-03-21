import prismaClient from "../../prisma";

interface StudentRequest {
  id: string,
  name: string,
  objective: string,
  rg: number,
  cpf: number,
  address: string,
  contact: number,
  email: string
}

export class UpdateStudentService {
  async execute({ id, name, objective, rg, address, cpf, contact, email }: StudentRequest) {

    const student = await prismaClient.students.updateMany({
      where: {
        id: id,
      },
      data: {
        id: id,
        name: name,
        objective: objective,
        rg: rg,
        cpf: cpf,
        address: address,
        contact: contact,
        email: email
      }
    })

    return student
  }
}