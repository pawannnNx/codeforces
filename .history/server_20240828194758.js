import express ,{Request,Response} from 'express';
import bodyParser from 'body-parser';
import { OpenAI } from 'openai';

const app = express();
const port = 5000;
const openai = new OpenAI(
    {
        apiKey:process.env.OpenAI_API_KEY
    }
);
app.use(bodyParser.json());

app.post('/api/check-grammar',async (req:Request,res:Response)=>{
   const {text}=req.body;
   try{
    const response = await openai.completions.create(
        {
            model: "text-davinci-003",
            prompt: `Check the following text for grammar and spelling errors:\n\n${text}`,
            max_tokens: 1000;  
        }
    );
    res.json({ correctedText: response.choices[0].text });

   } 
   catch(error)
})