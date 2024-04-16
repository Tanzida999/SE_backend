import express , {Request, Response } from 'express';
import userRoutes from './user/user-component';

const app = express();
const port = 3000;

const defaultFunction = (req: Request , res: Response) =>{
    res.send("Hello World!")
}

const createProfile = (req: Request , res: Response) =>{
    res.send("Profile Created!")
}

app.get('/' , defaultFunction);
app.get('/profile', createProfile);

app.use(express.json())
app.use('/user', userRoutes)
app.listen(port , ()=>{
    console.log(`Express API is running at port : ${port}`)
})