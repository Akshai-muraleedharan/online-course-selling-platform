import express from 'express';
import courseRoute from './courseRoute.js'
import userRoutes from './userRoutes.js'
const v1Router =express.Router()

v1Router.use('/course',courseRoute);
v1Router.use('/user',userRoutes);

export default v1Router