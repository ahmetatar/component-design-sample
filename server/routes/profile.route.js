const express = require('express');
const profileRoute = express.Router();

const PROFILES = [
  {
    id: 1,
    profileImage: '/assets/profile/default-avatar-1.png',
    fullName: 'Julie L. Arsenault',
    link: 'microsoft.com',
    userName: '@juliar',
    basePrice: 20,
    currency: 'USD',
    isDailyPrice: false,
    skills: ['android', 'ios'],
    hourAvailability: '5',
    isAvailable: true,
  },
  {
    id: 2,
    profileImage: '/assets/profile/default-avatar-2.png',
    fullName: 'Callista Mike',
    link: 'google.com',
    userName: '@mike',
    basePrice: 200,
    currency: 'EUR',
    isDailyPrice: true,
    skills: ['ios'],
    hourAvailability: 'fulltime',
    isAvailable: true,
  },
];

/**
 * Returns all profiles
 */
profileRoute.get('profiles/', (req, res) => {
  return res.json(PROFILES);
});

/**
 * Returns profile based on given id parameter.
 */
profileRoute.get('profiles/:id', (req, res) => {
  const profile = PROFILES.find((profile) => profile.id === +req.params.id);

  if (profile) {
    return res.json(profile);
  }

  return res.status(404).json({ error: 'not found' });
});

module.exports = profileRoute;
