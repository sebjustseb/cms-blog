const router = require('express').Router();
const { User } = require('../../models');

// Example route: GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }, // Exclude sensitive data like passwords
    });

    const users = userData.map((user) => user.get({ plain: true }));
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Example route: GET a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }, // Exclude sensitive data like passwords
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    const user = userData.get({ plain: true });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes for user operations as needed

module.exports = router;
