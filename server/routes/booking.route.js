const express = require('express');
const bookingRouter = express.Router();

let bookings = [
  {
    id: 1,
    status: 'closed',
    beginDate: '04/03/2022',
    endDate: '10/03/2022',
    profileId: 1,
    totalPrice: 600,
    tax: 0,
    notes: '',
    attachment: '',
  },
];

/**
 * Returns all bookings
 */
bookingRouter.get('/bookings', (req, res) => {
  return res.json(bookings);
});

/**
 * Returns profile based on given id parameter.
 */
bookingRouter.get('/bookings/:id', (req, res) => {
  const booking = bookings.find((booking) => booking.id === +req.params.id);

  if (booking) {
    return res.json(booking);
  }

  return res.status(404).json({ error: 'not found' });
});

/**
 * Creates a new booking.
 */
bookingRouter.post('/bookings', (req, res) => {
  const ids = bookings.map((booking) => booking.id);
  const id = Math.max(...ids) + 1;

  const newBooking = { id, ...req.body };
  bookings.push(newBooking);

  return res.status(201).json({ success: true });
});

/**
 * Delete a booking from booking list
 */
bookingRouter.delete('/bookings/:id', (req, res) => {
  const bookingIndex = bookings.findIndex((booking) => {
    return booking.id === +req.params.id;
  });

  if (bookingIndex !== -1) {
    bookings = bookings.slice(bookingIndex + 1, 1);
    return res.status(204).json({ success: true });
  }

  return res.status(404).json({ error: 'not found' });
});

module.exports = bookingRouter;
