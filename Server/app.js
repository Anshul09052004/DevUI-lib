import express from 'express';
import cors from 'cors';
import connectDb from './Db/index.js';
import AuthRouter from './Routes/AuthRoutes.js';
connectDb();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/api/auth', AuthRouter);
export default app;