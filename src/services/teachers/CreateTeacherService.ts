import prismaClient from "../../prisma";

interface ITeachersRequest {
  name: string;
  register: number;
  cpf: number;
  turn: string
}

export class CreateTeacherService {
  async execute({ name, register, cpf, turn }: ITeachersRequest) {

    const teacher = await prismaClient.teachers.create({
      data: {
        name: name,
        register: register,
        cpf: cpf,
        turn: turn
      }
    })

    return teacher;
  }
}