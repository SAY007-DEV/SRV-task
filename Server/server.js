import express from 'express';
import { connectDB } from './Config/database.js';
import cors from 'cors';
// Import your route files
import userRoutes from './routes/userRoutes.js';  // adjust path as needed

const app = express();
// dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());  // for parsing JSON bodies
app.use(express.urlencoded({ extended: true }));  // for parsing URL-encoded bodies

// Routes
app.use('/api/users', userRoutes);  // adjust path as needed

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});


// storing

let dataStore = []; // In-memory data storage

// Get all records
app.get('/api/data', (req, res) => {
    res.json(dataStore);
});

// Add a new record
app.post('/api/data', (req, res) => {
    const newData = { id: Date.now(), ...req.body };
    dataStore.push(newData);
    res.status(201).json(newData);
});

// Edit a record
app.put('/api/data/:id', (req, res) => {
    const { id } = req.params;
    const index = dataStore.findIndex(item => item.id == id);
    if (index !== -1) {
        dataStore[index] = { ...dataStore[index], ...req.body };
        res.json(dataStore[index]);
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});

// Delete a record
app.delete('/api/data/:id', (req, res) => {
    const { id } = req.params;
    dataStore = dataStore.filter(item => item.id != id);
    res.json({ message: 'Record deleted' });
});


// Connect to database
connectDB();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});