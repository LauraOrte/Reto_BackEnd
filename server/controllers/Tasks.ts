import { Request, Response } from 'express';
import { openDb } from '../configDB';

const createTable = async()=>{
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Tasks ( id INTEGER PRIMARY KEY AUTOINCREMENT, tittle TEXT, description TEXT)')
    })
}

const selectTasks = async(req: Request, res: Response)=>{
    openDb().then(db=>{
        db.all('SELECT * FROM Tasks')
        .then(tasks=> res.json(tasks))
    });
}

const selectTask=async (req: Request, res: Response) => {
    try {
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Tasks WHERE id=?', [id])
        .then(task=> res.json(task) );
    });
} catch (error) {
    return res.status(500).json(error);
}
}


const insertTask = async (req: Request, res: Response)=>{
    try {
    let task = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Tasks (tittle, description) VALUES (?,?)', [task.tittle, task.description]);
    });
    res.json({
        "statusCode": 200
    })
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateTask= async (req: Request, res: Response)=>{
    try{
    let user = req.body;
    openDb().then(db=>{
        db.run('UPDATE User SET name=?, edad=? WHERE id=?', [user.name, user.edad, user.id]);
    });
    res.json({
        "statusCode": 200
    })
} catch (error) {
    return res.status(500).json(error);
}
}

const deleteTask = async(req: Request, res: Response)=>{
    try {
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Tasks WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
} catch (error) {
    return res.status(500).json(error);
}
}

export const controllersTasks = {
    createTable,
    selectTasks,
    selectTask,
    insertTask,
    updateTask,
    deleteTask

}