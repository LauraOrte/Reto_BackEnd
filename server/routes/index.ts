import { Router } from 'express';
import { controllersTasks} from '../controllers/Tasks';
const router = Router();


//Rutas
router.get('/tasks', controllersTasks.selectTasks);

router.post('/tasks', controllersTasks.insertTask);

router.get('/tasks/:id', controllersTasks.selectTask);

router.put('/tasks/:id', controllersTasks.updateTask);

router.delete('/tasks/:id', controllersTasks.deleteTask);




export default router;