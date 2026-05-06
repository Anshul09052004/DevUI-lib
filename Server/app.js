import express from 'express';
import cors from 'cors';
import connectDb from './Db/index.js';
connectDb();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})
export default app;