import express from 'express';
import auth from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Add bank account
router.post('/accounts', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.bankAccounts.push(req.body);
    await user.save();
    res.json(user.bankAccounts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get bank accounts
router.get('/accounts', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.json(user.bankAccounts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
