import { Request, Response } from 'express'
import userModel from '../models/userModel'

const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await userModel.find({});
        
        res.send(user)
    } catch (err) {
        console.log(`ERROR -> ${err}`)
        res.send({
            error: 'internal error'
        })
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const idUser = req.params.id;
    
        const userFind = await userModel.findOne({ _id: idUser })
        res.send(userFind)
    } catch (err) {
        console.log(`ERROR -> ${err}`)
        res.send({
            error: 'internal error'
        })
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const dataUser = req.body; 
        const model = new userModel(dataUser)
    
        await model.save()
        res.send('received data')
    } catch (err) {
        console.log(`ERROR -> ${err}`)
        res.send({
            error: 'internal error'
        })
    }  
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const idUser = req.params.id;
        const query = { _id: idUser }

        await userModel.findOneAndUpdate(query, req.body)
        res.send('user update')
    } catch (err) {
        console.log(`ERROR -> ${err}`)
        res.send({
            error: 'internal error'
        })
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const idUser = req.params.id;

        await userModel.findOneAndDelete({ _id: idUser })
        res.send('user delete')
    } catch (err) {
        console.log(`ERROR -> ${err}`)
        res.send({
            error: 'internal error'
        })
    }
}

export default {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}