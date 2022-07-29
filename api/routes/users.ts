import * as db from '../util/db'
import logger from '../util/signale'
import {verifyEmail} from "../util/mail"
import VerificationJWT from "../interfaces/VerificationJWT"
import * as mail from '../util/mail'

import {auth} from "express-oauth2-jwt-bearer"
import {Router} from "express"
import * as jwt from 'jsonwebtoken'
import * as crypto from "crypto"

const router: Router = Router()

const isDev: boolean = process.env.NODE_ENV !== 'production'
const AUTH0_DOMAIN: string = process.env.AUTH0_DOMAIN || 'localhost'
const VERIFICATION_SECRET: string = process.env.VERIFICATION_SECRET || ''
const checkJwt = auth({
    jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
    issuer: `https://${AUTH0_DOMAIN}/`,
    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
})

/**
 * Verify the JWT token comes from the Auth0 server
 * @param req The request
 * @param res The response
 * @param next The next middleware
 */
const originCheck = async (req, res, next) => {
    try {
        const token: string = req.header('Authorization')?.replace('Bearer ', '') || ''
        const decoded = jwt.verify(token, VERIFICATION_SECRET)
        logger.info(decoded)
        req.auth = {...decoded}
        next()
    } catch (e) {
        logger.error(e)
        res.sendStatus(401)
    }
}


/**
 * @route   GET /api/v1/users/
 * @desc    Get user by id
 * @access  Private
 */
router.get('/', checkJwt, async (req, res) => {
    try {
        const user = await db.getUserBySub(String(req.auth?.payload.sub))
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({
                error: 'User not found'
            })
        }
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            error: 'Server error'
        })
    }
})


/**
 * @route   GET /api/v1/users/bookings
 * @desc    Get user bookings
 * @access  Private
 */
router.get('/bookings', checkJwt, async (req, res) => {
    try {
        // @ts-ignore
        const trips = await db.getUserBookings(req.auth?.payload.sub)
        if (trips) {
            res.json(trips)
        } else {
            res.status(404).json({
                error: 'User or bookings not found'
            })
        }
    } catch (e: any) {
        logger.error(e)
        res.status(500).json({
            error: isDev ? e.message : 'Server error'
        })
    }
})


/**
 * @route   DELETE /api/v1/users/bookings/:id
 * @desc    Delete user booking
 * @access  Private
 */
router.delete('/bookings/:id', checkJwt, async (req, res) => {
    try {
        const booking = await db.getBookingById(req.params.id)
        if (booking) {
            if (booking.user.sub === req.auth?.payload.sub) {
                await db.deleteBooking(req.params.id)
                await mail.sendCancellation(booking.trip, await db.getUserBySub(String(req.auth?.payload.sub)), await db.getEmailBySub(booking.trip.driver_id))
                res.json({
                    message: 'Booking deleted'
                })
            }
        } else {
            res.status(404).json({
                error: 'Booking not found'
            })
        }
    } catch (e: any) {
        logger.error(e)
        res.status(500).json({
            error: isDev ? e.message : 'Server error'
        })
    }
})


/**
 * @route   GET /api/v1/users/trips
 * @desc    Get user trips
 * @access  Private
 */
router.get('/trips', checkJwt, async (req, res) => {
    try {
        const trips = await db.getUserTrips(req.auth?.payload.sub)
        if (trips) {
            res.json(trips)
        } else {
            res.status(404).json({
                error: 'User or trips not found'
            })
        }
    } catch (e: any) {
        logger.error(e)
        res.status(500).json({
            error: isDev ? e.message : 'Server error'
        })
    }
})


/**
 * @route   GET /api/v1/users/profile/sub/:sub
 * @desc    Get user public profile by sub
 * @access  Public
 */
router.get('/profile/sub/:sub', originCheck, async (req, res) => {
    try {
        const user = await db.getPublicProfileBySub(req.params.sub)
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({
                error: 'User not found'
            })
        }
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            error: 'Server error'
        })
    }
})


/**
 * @route   GET /api/v1/users/profile/:id
 * @desc    Get user public profile by id
 * @access  Public
 */
router.get('/profile/:id', async (req, res) => {
    try {
        const user = await db.getPublicProfile(req.params.id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({
                error: 'User not found'
            })
        }
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            error: 'Server error'
        })
    }
})


/**
 * @route   POST /api/v1/users/isVerified
 * @desc    Check if user is verified
 * @access  Private
 */
router.get('/isVerified', originCheck, async (req, res, next) => {
    try {
        const auth = req.auth as unknown as VerificationJWT
        // check if the user is verified and save it if doesn't exist
        const verified: boolean | undefined = await db.verifiedOrSave(auth)
        const token = jwt.sign({
            sub: auth.sub,
        }, VERIFICATION_SECRET, { expiresIn: '5m' })

        res.status(200).json({verified, token})
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            error: 'Server error'
        })
    }
})


/**
 * @route   POST /api/v1/users/sendVerificationCode
 * @desc    Send verification code to user
 * @access  Private
 */
router.post('/sendVerificationCode', originCheck, async (req, res) => {
    try {
        const auth = req.auth as unknown as VerificationJWT
        if (req.body.hasOwnProperty('email')) {
            if (verifyEmail(String(req.body.email))) {
                if (await db.studentEmailUsed(String(req.body.email))) {
                    res.sendStatus(409)
                } else {
                    const bytes = crypto.randomBytes(4).toString('hex')
                    let code = String(parseInt(bytes, 16)).substring(0, 6)

                    await db.saveVerificationCode(auth.sub, req.body.email, code)
                    await mail.send('confirm_address', req.body.email, 'Confirmation de votre adresse universitaire', {code})

                    const token = jwt.sign({
                        sub: auth.sub,
                        studentEmail: req.body.email
                    }, VERIFICATION_SECRET, { expiresIn: '5m' })

                    res.json({token})
                }
            } else {
                res.sendStatus(418)
            }
        } else {
            res.sendStatus(400)
        }
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            error: e
        })
    }
})


/**
 * @route   POST /api/v1/users/verify
 * @desc    Verify user
 * @access  Private
 */
router.post('/verify', originCheck, async (req, res) => {
    try {
        const auth = req.auth as unknown as VerificationJWT
        if (req.body.hasOwnProperty('code') && /\d{6}/.test(req.body.code)) {
            const ok = await db.verifyCode(auth.sub, String(auth.studentEmail), req.body.code)

            const token = jwt.sign({
                sub: auth.sub,
                verified: ok,
                state: req.body.state
            }, VERIFICATION_SECRET, { expiresIn: '30s' })

            res.status(ok ? 200 : 418).json(ok ? {token} : '')
        } else {
            res.sendStatus(400)
        }
    } catch
        (e) {
        logger.error(e)
        res.status(500).json({
            error: 'Server error'
        })
    }
})


/**
 * @route   PUT /api/v1/users/picture
 * @desc    Update user picture
 * @access  Private
 */
router.put('/picture', checkJwt, async (req, res) => {
    try {
        logger.info(req.body)
        return res.sendStatus(200)
        const user = await db.updateUserPicture(req.params.id, req.body)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({
                error: 'User not found'
            })
        }
    } catch (e) {
        logger.error(e)
        res.status(500).json({
            error: 'Server error'
        })
    }
})


module.exports = {router}
