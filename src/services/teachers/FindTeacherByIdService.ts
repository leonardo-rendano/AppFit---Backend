import prismaClient from "../../prisma";

interface TeacherRequestProps {
  teacher_id: string
}

export class FindTeacherByIdService {
  async execute({ teacher_id }: TeacherRequestProps) {

    const teacher = await prismaClient.teachers.findFirst({
      where: {
        id: teacher_id
      }
    })

    return teacher
    
  }
}