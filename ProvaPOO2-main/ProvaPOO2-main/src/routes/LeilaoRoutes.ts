import { Router } from "express";
import LeilaoController from "../controller/LeilaoController"

const LeilaoRouter = Router();

LeilaoRouter.get("/", LeilaoController.listarLeiloes);

LeilaoRouter.post("/create", LeilaoController.criarLeilao);

LeilaoRouter.patch("/update/:leilaoId", LeilaoController.atualizarLeilao);

LeilaoRouter.delete("/delete/:leilaoId", LeilaoController.deletarLeilao);

export default LeilaoRouter;