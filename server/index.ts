// const express = require('express')
import express, { Express, Request, Response } from 'express'
const dotenv = require('dotenv')
const cors = require('cors')
const pool = require('./db')

dotenv.config()
const app: Express = express()
const port = process.env.PORT

//**MIDDLEWARES
app.use(cors())
app.use(express.json())

//**ROUTES

//CREATE
app.post('/duties', async(req: Request, res: Response) => {
    try {
        const { name } = req.body

        if(!name || name === '')
        res.status(400).json('Name cannot be empty.')

        const newDuty = await pool.query(
            'INSERT INTO duties (name) VALUES($1) RETURNING *', 
            [name])

            res.status(201).json(newDuty.rows[0])
    } catch (error) {
        console.error((error as Error).message)
    }
})

//GET ALL
app.get('/duties', async(req: Request, res: Response) => {
    try {
        const allDuties = await pool.query(
            'SELECT * FROM duties')

        res.status(200).json(allDuties.rows)
    } catch (error) {
        console.error((error as Error).message)
    }
})

//GET SINGLE
app.get('/duties/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params

        if(!id)
        res.status(400).json('ID cannot be empty.')

        const duty = await pool.query(
            'SELECT * FROM duties WHERE id = $1', 
            [id])

        res.status(200).json(duty.rows[0])
    } catch (error) {
        console.error((error as Error).message)
    }
})

//UPDATE
app.put('/duties/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name } = req.body

        if(!id)
        res.status(400).json('ID cannot be empty.')

        if(!name || name === '')
        res.status(400).json('Name cannot be empty.')

        await pool.query(
            'UPDATE duties SET name = $1 WHERE id = $2',
            [name, id])

        res.status(200).json('Duty was updated.')
    } catch (error) {
        console.error((error as Error).message)
    }
})

//DELETE
app.delete('/duties/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        await pool.query(
            'DELETE FROM duties WHERE id = $1',
            [id]
        )

        res.status(200).json('Duty was deleted.')
    } catch (error) {
        console.error((error as Error).message)
    }
})


app.listen(port, () => {
    console.log(`Server has started at [port:${port}]`)
})

export default app