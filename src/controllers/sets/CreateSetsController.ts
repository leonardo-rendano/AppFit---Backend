import { Request, Response } from "express";
import { CreateSetsService } from "../../services/sets/CreateSetsService";

export class CreateSetsController {
  async handle(req: Request, res: Response) {

    const { type } = req.body;

    const createSetsService = new CreateSetsService()

    const set = await createSetsService.execute({
      type
    })

    return res.json(set)
  }
}