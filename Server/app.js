import express from 'express';
import cors from 'cors';
import connectDb from './Db/index.js';
import AuthRouter from './Routes/AuthRoutes.js';
import UserRouter from './Routes/User.Routes.js';
import cookieParser from 'cookie-parser';
connectDb();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: [
        'http://10.108.13.239:5173',
        'http://localhost:5173'
    ],
    credentials: true
}));


app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);
export default app;