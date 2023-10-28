import express from 'express';
import passport from 'passport';
import authRoutes from './routes/auth.js';
import listroute from './routes/listroute.js';
import taskRoute from './routes/Taskroute.js';
import bodyParser from 'body-parser';
import { setConnection} from './postgsql.js';
const app = express();
setConnection();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(passport.initialize());
app.use('/auth', authRoutes);
app.use('/list', listroute);
app.use('/task', taskRoute);

app.listen(3333, () => {
    console.log('Server started on port 3333!');
});