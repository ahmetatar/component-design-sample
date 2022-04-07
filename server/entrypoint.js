const express = require('express');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const doc = require('../swagger.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc));
app.use('/profiles', routes.profileRouter);
app.use('/bookings', routes.bookingRouter);

app.listen(PORT, () => console.log('Server listening...'));
