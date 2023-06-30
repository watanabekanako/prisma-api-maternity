import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

// GET /question
router.get("/", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  res.json({ user });
});
router.post("/", async (req: Request, res: Response) => {
  const { email, password, birthDate, name } = req.body;
  console.log(req);
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      birthDate: birthDate,
      name: name,
    },
  });
  res.json({ user });
});
router.post("/categories", async (req: Request, res: Response) => {
  // 投稿の作成
  console.log("req", req.body);
  const categories = await prisma.category.create({
    data: {
      name: req.body.name,
    },
  });

  res.json({ categories });
});
export default router;
