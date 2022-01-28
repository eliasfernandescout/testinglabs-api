// CONEXÃO COM O BANCO DE DADOS
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose
    .connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?authSource=admin`,
    )
    .then(res => {
        console.log('🟣 Connected to Database [mongoDB]');
    })
    .catch(err => {
        console.log(`Unable to Connect Database`, err);
    });
