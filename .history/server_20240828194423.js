import express ,{Request,Response} from 'express';
import bodyParser from 'body-parser';
import { OpenAI } from 'openai';

const app = express();
const port = 5000;
const openai = new OpenAI(
    {
        apiKey
    }
)