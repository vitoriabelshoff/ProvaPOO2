import { Router } from "express";
import UsuarioController from "../controller/UsuarioController"

const UsuarioRouter = Router();

UsuarioRouter.get("/", UsuarioController.listarUsuarios);

UsuarioRouter.post("/create", UsuarioController.criarUsuario);

UsuarioRouter.patch("/update/:usuarioId", UsuarioController.atualizarUsuario);

UsuarioRouter.delete("/delete/:usuarioId", UsuarioController.deletarUsuario);

export default UsuarioRouter;