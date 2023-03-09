import prismaClient from "../../prisma";

interface StudentRequest {
  name: string
}

export class FindStudentByNameService {
  async execute({ name }: StudentRequest) {

    const student = await prismaClient.students.findFirst({
      where: {
        name: name
      }
    })

    return student
  }
}