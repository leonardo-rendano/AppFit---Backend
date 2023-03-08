import prismaClient from "../../prisma";

export class FindStudentService {
  async execute() {

    const student = await prismaClient.students.findMany({
      select: {
        id: true,
        name: true,
        objective: true,
        rg: true,
        cpf: true,
        address: true,
        contact: true,
        email: true
      }
    })

    return student;
  }
}