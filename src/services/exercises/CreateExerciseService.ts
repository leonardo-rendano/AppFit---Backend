import prismaClient from "../../prisma";

interface IExerciseRequest {
  name: string;
  reps: number;
}

export class CreateExerciseService {
  async execute({ name, reps }: IExerciseRequest) {

    const exercise = await prismaClient.exercises.create({
      data: {
        name: name,
        reps: reps
      }
    })

    return exercise;
  }
}