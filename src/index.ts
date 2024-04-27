import express , {Request, Response } from 'express';
import userRoutes from './user/user-component';

let profiles = [];

const app = express();
app.use(express.json())
const port = 3000;

const defaultFunction = (req: Request , res: Response) =>{
    if(req.get('X-MAD') == 'Spring24')
    {
        res.send("Hello World!")
    }
    else res.status(404).send('Unauthorized')
   
}

const createProfile = (req: Request , res: Response) =>{
    console.log(req.body)
    if(req.body)
        {
            const profile = {
                id: req.body.id,
                name: req.body.name
            }
            profiles.push(profile)
            res.status(201).send("Profile Created")
        }
        res.status(400).send("Error Occured")
}

const getProfiles = (req:Request , res:Response) =>{
    res.status(201).send(profiles)
}

app.get('/' , defaultFunction);
app.post('/', createProfile);
app.get('/profiles', getProfiles);
// app.get('/profile', createProfile);


app.use('/user', userRoutes)
app.listen(port , ()=>{
    console.log(`Express API is running at port : ${port}`)
})