import prismaClient from "../../prisma";

export class FindTeachersService {
  async execute() {

    const teachers = await prismaClient.teachers.findMany({
      select: {
        id: true,
        name: true,
        register: true,
        cpf: true,
        turn: true
      }
    })

    return teachers;
  }
}