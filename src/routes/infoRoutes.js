import {Router} from 'express'
import { getPlants } from '../services/mysql/getPlants.js'

const infoRoutes = Router()

infoRoutes.get('/getPlants', async (req, res) => {
    const count = Number(req.query.count)
    const plants = await getPlants(count)
    return res.json(plants)
})

export {infoRoutes}