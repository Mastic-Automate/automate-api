import {Router} from 'express'
import { getPlants } from '../services/mysql/getPlants.js'
import { getPlantInfo } from '../services/mysql/getPlantInfo.js'

const infoRoutes = Router()

infoRoutes.get('/getPlants', async (req, res) => {
    const count = Number(req.query.count) || 30
    const plants = await getPlants(count)
    return res.status(200).json(plants)
})

infoRoutes.get('/getPlant', async (req, res) => {
    const id = Number(req.query.id)
    if(!id) {
        return res.status(404).json({
            message: 'No id provided'
        })
    }
    const plant = await getPlantInfo(id)
    return res.status(200).json(plant)
})

export {infoRoutes}