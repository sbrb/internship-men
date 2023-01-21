import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import route from './routes/router.js';
import 'dotenv/config';
const app = express();

app.use(express.json())
app.use(multer().any());
app.use(cors())

const PORT = process.env.PORT

mongoose.connect(process.env.DB, {
    useNewUrlParser: true
}).then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log(req.ip)
    next();
});

app.use('/', route);

app.use((req, res) => res.status(400).send({ status: false, message: `'${req.url}' this URL is Invalid.` }));
app.listen(PORT, () => console.log(`Express app is running on port ${PORT}`));
