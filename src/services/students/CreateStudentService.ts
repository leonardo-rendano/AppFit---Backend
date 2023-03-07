import prismaClient from '../../prisma'

interface IStudentRequest {
  name: string;
  objective: string;
  rg: number;
  cpf: number;
  address: string;
  phone: number;
  email: string
}

export class CreateStudentService {
  async execute({ name, objective, rg, cpf, address, phone, email }: IStudentRequest) {
    
    if (!name && !cpf) {
      throw new Error("Dados obrigatórios! Verfique os campos e tente novamente.")
    }

    const studentAlreadyExists = await prismaClient.students.findFirst({
      where: {
        student_name: name
      }
    })

    if (studentAlreadyExists) {
      throw new Error("Aluno já cadastrado!")
    }

    const student = await prismaClient.students.create({
      data: {
        student_name: name,
        student_objective: objective,
        student_rg: rg,
        student_cpf: cpf,
        student_address: address,
        student_contact_number: phone,
        student_email: email,
      }
    })

    return student

  }
}