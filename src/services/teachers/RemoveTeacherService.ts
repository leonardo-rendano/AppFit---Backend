import prismaClient from "../../prisma";

interface TeacherRequest {
  teacher_id: string
}

export class RemoveTeacherService {
  async execute({ teacher_id }: TeacherRequest) {

    const teacher = await prismaClient.teachers.delete({
      where: {
        id: teacher_id
      }
    })

    return teacher
  }
}