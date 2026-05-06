import express from 'express';
import cors from 'cors';
import connectDb from './Db/index.js';
import AuthRouter from './Routes/AuthRoutes.js';
connectDb();
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/api/auth',AuthRouter);
export default app;