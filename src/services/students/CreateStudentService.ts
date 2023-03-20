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
    
    // if (!name) {
    //   throw new Error("Dados obrigatórios! Verfique os campos e tente novamente.")
    // }

    // const studentAlreadyExists = await prismaClient.students.findFirst({
    //   where: {
    //     name: name
    //   }
    // })

    // if (studentAlreadyExists) {
    //   throw new Error("Aluno já cadastrado!")
    // }

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