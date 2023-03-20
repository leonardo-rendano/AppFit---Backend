import prismaClient from "../../prisma";

interface StudentProps {
  id: number
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