const express = require('express');
const bookingRouter = express.Router();
let { bookings } = require('../mocks');

/**
 * GET/ bookings
 */
bookingRouter.get('/', (req, res) => {
  return res.json(bookings);
});

/**
 * GET/ bookings/1
 * @param route param - booking id
 */
bookingRouter.get('/:id', (req, res) => {
  const booking = bookings.find((booking) => booking.id === +req.params.id);

  if (booking) {
    return res.json(booking);
  }

  return res.sendStatus(404);
});

/**
 * POST/ bookings
 * @param payload - booking object
 */
bookingRouter.post('/', (req, res) => {
  const ids = bookings.map((booking) => booking.id);
  const id = Math.max(...ids) + 1;

  const newBooking = { id, ...req.body };
  bookings.push(newBooking);

  return res.sendStatus(201);
});

/**
 * DELETE/ bookings/1
 * @param route param - booking id
 */
bookingRouter.delete('/:id', (req, res) => {
  const bookingIndex = bookings.findIndex((booking) => {
    return booking.id === +req.params.id;
  });

  if (bookingIndex !== -1) {
    bookings.splice(bookingIndex, 1);
    return res.sendStatus(204);
  }

  return res.sendStatus(404);
});

module.exports = bookingRouter;
