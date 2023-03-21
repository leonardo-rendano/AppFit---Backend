import prismaClient from "../../prisma";

interface StudentRequestProps {
  id: string
}

export class FindStudentByIdService {
  async execute({ id }: StudentRequestProps) {

    const student = await prismaClient.students.findFirst({
      where: {
        id: id
      }
    })

    return student

  }
}