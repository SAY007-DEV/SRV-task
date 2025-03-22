import express from 'express';
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
    res.send('User routes working');
});

// Add other routes...

export default router; 