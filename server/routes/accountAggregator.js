import express from 'express';
import { handleAACallback } from '../services/accountAggregator.js';

const router = express.Router();

router.get('/callback', async (req, res) => {
  try {
    const result = await handleAACallback(req.query);
    
    // Redirect to the frontend with status
    if (result.status === 'APPROVED') {
      res.redirect(`/onboarding/banking/success?consentId=${result.consentId}`);
    } else {
      res.redirect('/onboarding/banking/error');
    }
  } catch (error) {
    console.error('AA Callback Error:', error);
    res.redirect('/onboarding/banking/error');
  }
});
