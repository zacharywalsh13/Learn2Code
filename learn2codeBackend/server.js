const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/users');
const addCourseRoute = require('./routes/addCourse');
const activeCoursesRoute = require('./routes/userCourses');

require ('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/users', userRoutes);
app.use('/addCourse', addCourseRoute);
app.use('/users', activeCoursesRoute);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

app.listen(3001)