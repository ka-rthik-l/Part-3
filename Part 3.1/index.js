const express = require('express');
const app = express();
const port = 3001;

// Hardcoded list of phonebook entries
const phonebookEntries = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

// Route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Phonebook API</h1><p>Visit <a href="/api/persons">/api/persons</a> to see the phonebook entries.</p>');
});

// Route to return the phonebook entries
app.get('/api/persons', (req, res) => {
    res.json(phonebookEntries);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
