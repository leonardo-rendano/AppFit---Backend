import prismaClient from '../../prisma'

interface IStudentRequest {
  name: string;
  objective: string;
  rg: number;
  cpf: number;
  address: string;
  contact: number;
  email: string
}

export class CreateStudentService {
  async execute({ name, objective, rg, cpf, address, contact, email }: IStudentRequest) {

    const student = await prismaClient.students.create({
      data: {
        name: name,
        objective: objective,
        rg: rg,
        cpf: cpf,
        address: address,
        contact: contact,
        email: email,
      }
    })

    return student;

  }
}