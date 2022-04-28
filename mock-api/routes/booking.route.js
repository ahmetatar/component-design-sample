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

  return res.status(404).json({ error: 'not found' });
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

  return res.status(201);
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
    bookings = bookings.slice(bookingIndex + 1, 1);
    return res.status(204);
  }

  return res.status(404);
});

module.exports = bookingRouter;
