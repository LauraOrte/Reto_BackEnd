import { Router } from 'express';
const router = Router();


//Rutas
router.get('/tasks', (req, res)=>{
    res.send('Ver todas las tarea');
});

router.post('/tasks', (req, res)=>{
    res.send('Crear tarea nueva');
});

router.get('/tasks/:id', (req, res)=>{
    res.send('ver Tarea por id');
});

router.put('/tasks/:id', (req, res)=>{
    res.send('Actualizar tarea por id');
});

router.delete('/tasks/:id', (req, res)=>{
    res.send('Eliminar tarea por id');
});




export default router;