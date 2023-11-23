import { Request, Response } from "express"
import UserServices from "../services/UserServices"
import {Prisma} from "@prisma/client"

class UserController{
    constructor(){}

    async listarUsers(req: Request, res: Response){
        try {
            const users = await UserServices.listarUsers();

            return res.json(users);
        } catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    async criarUser(req: Request, res: Response){
        try {
        const data: Prisma.UsuarioCreateInput = req.body;

        const newUser = await UserServices.criarUser(data)

        return res.json(newUser);
    }   catch(error){
        console.log(error);
        return res.json(400);
    }   
    }

    async deletarUser(req: Request, res: Response){
        try {
            const userData: string = req.params.usuarioId;

            const user = await UserServices.deletarUser(userData);

            return res.json(user)
        }   catch(error){
            console.log(error);
            return null;
        }
    }

    async atualizarUser(req: Request, res: Response){
        try {
            const userId = req.params.usuarioId;
            const data: Prisma.UsuarioCreateInput = req.body;

            const user = await UserServices.atualizarUser(userId, data);

            return res.json(user);
        }   catch(error){
            console.log(error);
            return res.json(400);
        }
    }

    
}

export default new UserController();