import express from 'express';
import Task from '../model/Task.js';
const router = express.Router();

// Create a new list
router.post('/add', async (req, res) => {
    try {
        const { name, listId,userId } = req.body;
        console.log(name, listId,userId)
        const list = await Task.create({ name, listId,userId });
        res.status(201).json({ message: 'Task created successfully', Task });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Task creation failed' });
    }
});

// Get all Tasks

router.get('/', async (req, res) => {
    try {
        const Tasks = await Task.findAll();
        res.status(200).json({ Tasks });
    } catch (error) {
        res.status(500).json({ error: 'Unable to retrieve Tasks' });
    }
}
);

// Get a Task by id

router.get('/:id', async (req, res) => {
    try {
        const Task = await Task.findByPk(req.params.id);
        res.status(200).json({ Task });
    } catch (error) {
        res.status(500).json({ error: 'Unable to retrieve Task' });
    }
}
);

// Delete a Task

router.delete('/:id', async (req, res) => {
    try {
        await Task.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete Task' });
    }
}
);

// Update a Task

router.put('/:id', async (req, res) => {
    try {
        const { name, listId,userId } = req.body;
        await Task.update({ name, listId,userId }, { where: { id: req.params.id } });
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to update Task' });
    }
}
);

export default router;

