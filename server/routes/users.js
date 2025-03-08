import express from 'express';
import auth from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: updates },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add financial goal
router.post('/goals', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.financialGoals.push(req.body);
    await user.save();
    res.json(user.financialGoals);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update budget categories
router.put('/budget', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.budgetCategories = req.body;
    await user.save();
    res.json(user.budgetCategories);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
