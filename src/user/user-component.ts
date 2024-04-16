import { Router } from "express";
import { User } from "./user.model";

const router = Router();
let users: User[] = [] ;

const createUser = (req: Request , res: Response) =>{
    if(req.body)
    {
        const user: User = {
            id: users.length + 1,
            name: req.body?.name,
            age: req.body?.age,
            address: req.body?.address 
         }
    }
    

    users.push(user)
    res.status(201).json(user);
}

router.post('/', createUser);

export default router;