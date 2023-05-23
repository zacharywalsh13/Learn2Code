const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator')
const User = require('../models/user')

const router = express.Router()

router.post('/signup',
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('username').notEmpty().withMessage('Username is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
    body('confirmPassword').custom((value, { req }) => { 
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password')
        }
        return true
    }),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() })
        }

        const { firstName, lastName, username, email, password } = req.body
        try {
            const existingUser = await User.findOne({ email })
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const result = await User.create({ firstName, lastName, username, email, password: hashedPassword })

            const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.status(201).json({ result, token })
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' })
        }
    })


    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
          const existingUser = await User.findOne({ email });
          if (!existingUser) return res.status(404).json({ message: "User doesn't exist" });
      
          const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
          if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });
      
          const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          res.status(200).json({ result: existingUser, token });
        } catch (err) {
          res.status(500).json({ message: 'Something went wrong' });
        }
      });
      
      module.exports = router;