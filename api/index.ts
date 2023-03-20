import {initDB} from "./util/db"
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import mongoose from "mongoose"
import logger from './util/signale'
import * as mail from "./util/mail"
import universities from "./universities"

import cors from 'cors'
import rateLimit from 'express-rate-limit'
import helmet from "helmet"

const {version} = require('../package.json')

const mongoUrl: string = process.env.MONGO_URL || 'localhost'
const mongoPort: string = process.env.MONGO_PORT || '27017'

logger.info('Starting...')
logger.info('Version : ' + version)
logger.info('MongoDB Url : ' + `mongodb://${mongoUrl}:${mongoPort}/unicovoit`)

// Connect to MongoDB first
mongoose.connect('mongodb+srv://admin:tchBmVN5ji8tY1so@unicovoit.bx7utjo.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', function () {
    logger.success('Mongo connected Successfully')
}).on('error', function (err) {
    logger.error('Error', err)
})

// Exit if the JWT secret is not set
if (!process.env.VERIFICATION_SECRET) {
    logger.error('VERIFICATION_SECRET for student status verification is not set')
    process.exit(1)
}

const app: express.Express = express()

let limiter: any = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


app.disable('x-powered-by') // Disable Express header

app.use(bodyParser.json({
    limit: '20mb'
}))
app.use(cookieParser())
app.use(helmet()) // Add security headers
app.use(cors()) // Set cross-origin requests headers
app.use(limiter) // Set the rate limit

app.use('/v1/trips', require('./routes/trips').router)
app.use('/v1/users', require('./routes/users').router)
app.use('/v1/stats', require('./routes/stats').router)
app.get('/v1/universities', (req, res) => {
    res.json({
        universities: universities.map(uni => {
                const {format, ...u} = uni
                return {...u, format: format.source}
            })
    })
})


// reset db if not in prod
if (process.env.NODE_ENV !== 'production') {
    logger.time('initialisation')
    setTimeout(() => {
        initDB().then(() => {
            logger.timeEnd('initialisation')
        })
    }, 1000)
}


export default app


// test mail connection
mail.test()


// Start the server if standalone mode
if (require.main === module) {
    const port: string | number = process.env.PORT || 3001
    app.listen(port, () => {
        logger.info(`API server listening on port ${port}`)
    })
}
