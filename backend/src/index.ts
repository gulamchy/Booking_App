import express, {Request, Response} from  'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();
// mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
//     .then(() => console.log('MongoDB connected successfully'))
//     .catch(err => console.error('Failed to connect to MongoDB', err));

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

connectToDatabase();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));


app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, ()=> {
    console.log('Server running on localhost: 3000')
});