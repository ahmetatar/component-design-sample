const express = require('express');
const env = require('./environments');
const { authRouter, bookingRouter, profileRouter } = require('./routes');
const { authenticate } = require('./middlewares');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/profiles', profileRouter);
app.use('/bookings', authenticate({ tokenSecret: env.tokenSecret }), bookingRouter);

app.listen(PORT, () => console.log('Server listening...'));
