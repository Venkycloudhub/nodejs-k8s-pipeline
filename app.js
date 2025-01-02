// app.js

// Import the express library
const express = require('express');

// Create an instance of an express app
const app = express();

// Use the built-in express.json() middleware to parse JSON in request bodies
app.use(express.json());

// In-memory "database" (a simple array)
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

// Home route (GET request)
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Sample App!');
});

// Route to get all items (GET request)
app.get('/items', (req, res) => {
    res.json(items);
});

// Route to get a specific item by id (GET request)
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    res.json(item);
});

// Route to add a new item (POST request)
app.post('/items', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    const newItem = {
        id: items.length + 1,
        name,
    };

    items.push(newItem);

    res.status(201).json(newItem);
});

// Route to update an existing item (PUT request)
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const { name } = req.body;

    const itemIndex = items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    // Update item
    items[itemIndex].name = name;

    res.json(items[itemIndex]);
});

// Route to delete an item (DELETE request)
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);

    const itemIndex = items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    // Remove item from array
    const deletedItem = items.splice(itemIndex, 1);

    res.json(deletedItem);
});

// Set the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

