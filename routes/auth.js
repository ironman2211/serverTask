
import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../model/User.js';
import List from '../model/List.js';
import Task from '../model/Task.js';
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, lastName, email, password: hashedPassword });


        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'User registration failed' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email: email } });
        if (!user) return res.status(401).json({ error: 'Incorrect email or password' });

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return res.status(401).json({ error: 'Incorrect email or password' });

        return res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        return done(error);
    }
}
);

router.post('/Lists', async (req, res) => {
    console.log(req.body.id)
    try {
        let lists = await List.findAll({ where: { userId: req.body.id } });
        lists.map(async(list)=>{
            const task =await Task.findAll({ where: { userId: list.id } }); 
            task.add
        })
        res.status(200).json({ lists });
    } catch (error) {
        res.status(500).json({ error: 'Unable to retrieve lists' });
    }
}
);


router.get('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'User logged out successfully' });
}
);

export default router;
