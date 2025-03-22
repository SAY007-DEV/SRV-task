import express from "express";
import cors from 'cors';
import connectDB from './Config/database.js';


const app = express();
app.use(cors());
app.use(express.json());


const PORT = 8080;

connectDB();



// api

app.use('api/v1/user',);






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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});