import prismaClient from "../../prisma";

interface ISetsRequest {
  type: string
}

export class CreateSetsService {
  async execute({ type }: ISetsRequest) {

    const set = await prismaClient.sets.create({
      data: {
        type: type
      }
    })

    return set;
  }
}