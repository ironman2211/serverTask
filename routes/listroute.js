import express from 'express';
import List from '../model/List.js';
const router = express.Router();

// Create a new list
router.post('/add', async (req, res) => {
    try {
        const { title, userId } = req.body;
        console.log(title, userId)
        const list = await List.create({ title, userId });

        res.status(201).json({ message: 'List created successfully', list });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'List creation failed' });
    }
});
router.post('/update', async (req, res) => {
    try {
        const { title, userId } = req.body;
        console.log(title, userId)
        const list = await List.update({ title, userId });

        res.status(201).json({ message: 'List updated successfully', list });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'List updation failed' });
    }
}
);

// Get all lists
router.get('/', async (req, res) => {
    try {
        const lists = await List.findAll();

        res.status(200).json({ lists });
    } catch (error) {
        res.status(500).json({ error: 'Unable to retrieve lists' });
    }
});

// Get a list by id
router.get('/:id', async (req, res) => {
    try {
        const list = await List.findByPk(req.params.id);

        res.status(200).json({ list });
    } catch (error) {
        res.status(500).json({ error: 'Unable to retrieve list' });
    }
});

// Delete a list
router.delete('/:id', async (req, res) => {
    try {
        await List.destroy({ where: { id: req.params.id } });

        res.status(200).json({ message: 'List deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to delete list' });
    }
});

export default router;