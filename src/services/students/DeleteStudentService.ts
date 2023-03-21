import prismaClient from "../../prisma";

interface StudentProps {
  id: string
}

export class DeleteStudentService {
  async execute({ id }: StudentProps) {

    const student = await prismaClient.students.delete({
      where: {
        id: id
      }
    })

    return student
  }
}