import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

// GET /question
router.get("/", async (req: Request, res: Response) => {
  const questions = await prisma.question.findMany();
  res.json(questions);
});
router.post("/", async (req: Request, res: Response) => {
  const { query, answer, categoryId } = req.body;
  const question = await prisma.question.create({
    data: {
      query: query,
      answer: answer,
      categoryId: categoryId,
    },
  });
  res.json({ question });
});
export default router;
