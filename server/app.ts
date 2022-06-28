import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { controllersTasks } from './controllers/Tasks';

import tasksRoutes from './routes';


const app = express();

//middlewares
app.use(cors()); // peticiones de otros dominios
app.use(morgan('dev')); //muestra por consola los requests
app.use(express.json()); //parsea el body de las peticiones en json

app.use('/api', tasksRoutes);

controllersTasks.createTable();



export default app;