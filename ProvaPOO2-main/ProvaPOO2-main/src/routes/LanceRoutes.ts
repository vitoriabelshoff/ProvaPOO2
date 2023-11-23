import { Router } from "express";
import LanceController from "../controller/LanceController"

const LanceRouter = Router();

LanceRouter.get("/", LanceController.listarLance);

LanceRouter.post("/create", LanceController.criarLance);

LanceRouter.patch("/update/:lanceId", LanceController.atualizarLance);

LanceRouter.delete("/delete/:lanceId", LanceController.deletarLance);

export default LanceRouter;