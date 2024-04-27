import { Router, Response, Request } from "express";
import { User } from "./user.model";
import db from "../config/db";

const router = Router();
let users: User[] = [] ;

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
//   }
// router.use(timeLog)

const createUser = (req: Request , res: Response) =>{
    if(req.body)
    {
        const newUser: User = {
            id: users.length + 1,
            name: req.body?.name,
            age: req.body?.age,
            address: req.body?.address 
         }
        users.push(newUser)
    }
    
    res.status(202).json(users);
}

const createUserDB = async (req: Request, res: Response) =>{
    if(req.body)
        {
            const newUser: User = {
                name: req.body?.name,
                age: req.body?.age,
                address: req.body?.address 
             }
             const query = `INSERT INTO User(name, age, address) VALUES ('${newUser.name}' , ${newUser.age}, '${newUser.address}')`
             const result = await db.query(query)
             res.send(result)
        }
}

const getUserDB = async(req: Request , res: Response) =>
{
    const query = `SELECT * FROM USER`;
    const result = await db.query(query);
    console.log(result)
    res.send(result)
    
}

router.post('/', createUser);
router.post('/db', createUserDB);
router.get('/getUsers', getUserDB);

export default router;