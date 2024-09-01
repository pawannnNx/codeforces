import express from 'express'
import messageRoutes from '@/routes/messageRoutes';
import mediaRoutes from '@/routes/mediaRoutes' 
const app = express()
app.use(express.json());
app.use('/messages',messageRoutes);
app.use('/media',mediaRoutes);
const PORT = process.env.