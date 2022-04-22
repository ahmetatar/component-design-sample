const express = require('express');
const profileRoute = express.Router();
const PROFILES = require('../data/profiles');

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
