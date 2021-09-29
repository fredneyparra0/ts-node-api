import mongoose, { Schema, model, Document } from 'mongoose';

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
}

const userSchema: Schema = new Schema({
    name: String,
    email: String,
    password: String
})

export default model <IUser>('user', userSchema)