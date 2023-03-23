import prismaClient from "../../prisma";

interface TeacherRequestProps {
  id: string,
  name: string,
  register: number,
  cpf: number,
  turn: string
}

export class EditTeacherService {
  async execute({ id, name, register, cpf, turn }: TeacherRequestProps) {

    const teacher = await prismaClient.teachers.update({
      where: {
        id: id
      },
      data: {
        name: name,
        register: register,
        cpf: cpf,
        turn: turn
      }
    })

    return teacher
  }
}